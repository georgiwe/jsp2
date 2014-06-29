function createCalendar(selector, events) {
    var fragment = document.createDocumentFragment();

    var day = document.createElement('div');
    day.style.margin = 0;
    day.style.padding = 0;
    day.style.border = '1px solid #000';
    day.style.width = '150px';
    day.style.height = '170px';
    day.className = 'day';
    day.style.display = 'inline-block'
    day.style.cssFloat = 'left';

    var dayTitle = document.createElement('div');
    dayTitle.style.margin = 0;
    dayTitle.style.padding = 0;
    dayTitle.style.borderBottom = '1px solid #000';
    dayTitle.textContent = 'Sun 1 June 2014';
    dayTitle.style.textAlign = 'center';
    dayTitle.style.fontWeight = 'bold';
    dayTitle.style.backgroundColor = '#ccc';
    dayTitle.className = 'dayTitle';

    var dayContent = document.createElement('div');
    dayContent.className = 'dayContent';

    var week = document.createElement('div');
    week.style.margin = 0;
    week.style.padding = 0;
    week.className = 'week';
    week.style.width = '1075px';

    var daysOfWeek = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    var createdDays = [];
    var createdDaysCount = 0;

    for (var i = 0; i < 5 && createdDaysCount < 30; i++) {
        var currWeek = week.cloneNode(true);

        for (var j = 0; j < 7 && createdDaysCount < 30; j++) {
            var currDay = day.cloneNode(true);
            createdDaysCount++;

            var currTitle = dayTitle.cloneNode(true);
            var dayOfWeekIndex = createdDaysCount % 7;
            currTitle.textContent = daysOfWeek[dayOfWeekIndex] + ' ';
            currTitle.textContent += createdDaysCount + ' June 2014';

            var currDayContent = dayContent.cloneNode(true);

            currDay.appendChild(currTitle);
            currDay.appendChild(currDayContent)
            currWeek.appendChild(currDay);
            createdDays.push(currDay);
        }

        fragment.appendChild(currWeek);
    }

    for (i = 0; i < events.length; i++) {
        var currEvent = events[i];
        var currDate = currEvent.date;
        currDay = createdDays[+currDate - 1];
        //currDayContent = currDay.lastChild;
        //currDayContent.textContent = currEvent.hour + ' ' + currEvent.title;
        currDay.innerHTML += currEvent.hour + ' ' + currEvent.title;
    }

    var calendarContainer = document.querySelector(selector);
    var lastSelected;

    calendarContainer.addEventListener('click', function (e) {
        var target = e.target;
        var tClassName = target.className;
        var currDayTitle;

        if (tClassName === 'day') {
            currDayTitle = target.firstChild;
        } else if (tClassName === 'dayTitle') {
            currDayTitle = target;
        }

        if (lastSelected !== currDayTitle &&
            lastSelected !== undefined) {
            changeTitleStylesToNormal(lastSelected);
        }

        changeTitleStylesToSelected(currDayTitle);
        lastSelected = currDayTitle;
    });

    calendarContainer.addEventListener('mouseover', function (e) {
        var target = e.target;
        var tClassName = target.className;
        var currDayTitle;

        if (tClassName === 'day') {
            currDayTitle = target.firstChild;
        } else if (tClassName === 'dayTitle') {
            currDayTitle = target;
        }

        if (currDayTitle.style.backgroundColor !== 'rgb(255, 255, 255)') {
            changeTitleStylesToHovered(currDayTitle);
        }
    });

    calendarContainer.addEventListener('mouseout', function (e) {
        var target = e.target;
        var tClassName = target.className;
        var currDayTitle;

        if (tClassName === 'day') {
            currDayTitle = target.firstChild;
        } else if (tClassName === 'dayTitle') {
            currDayTitle = target;
        }

        if (currDayTitle.style.backgroundColor !== 'rgb(255, 255, 255)') {
            changeTitleStylesToNormal(currDayTitle);
        }
    });

    calendarContainer.appendChild(fragment);
    
    function changeTitleStylesToNormal(dayTitle) {
        dayTitle.style.backgroundColor = '#ccc';
    }

    function changeTitleStylesToHovered(dayTitle) {
        dayTitle.style.backgroundColor = '#888';
    }

    function changeTitleStylesToSelected(dayTitle) {
        dayTitle.style.backgroundColor = '#fff';
    }
}