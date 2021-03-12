export const dateFormat = (sessionsDate) => {
  let formatSessions = [];

  /* last three Dates array descending order */
  sessionsDate.reverse().some((session, index) => {
    let dataLogin = {
      date: '',
      last: '',
    };

    /* Get Millisecons per day and Today Date */
    const milisecondsDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    /* Login date to string */
    dataLogin.date = `${MONTHS[session.getMonth()]} ${
      session.getDate() < 10 ? '0' + session.getDate() : session.getDate()
    }, ${session.getFullYear()}`;

    /* Calc days from login */
    const daysLogin =
      Math.abs(today.getTime() - session.getTime()) / milisecondsDay;

    if (daysLogin >= 1) {
      dataLogin.last = `${Math.round(daysLogin)} days ago`;
    } else {
      /* Calc hours from login if is necessary */
      dataLogin.last = `${Math.abs(
        today.getHours() - session.getHours()
      )} hours ago`;
    }

    formatSessions.push(dataLogin);

    if (index === 2) {
      return true;
    }
    return false;
  });

  return formatSessions;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
