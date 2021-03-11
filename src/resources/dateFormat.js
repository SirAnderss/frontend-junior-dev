export const dateFormat = (sessions) => {
  const sessionsDate = sessions.map((item) => new Date(item));

  const formatSessions = sessionsDate.reverse().map((session) => {
    let dataLogin = {
      date: '',
      last: '',
    };
    const milisecondsDay = 24 * 60 * 60 * 1000;
    const today = new Date();

    dataLogin.date = `${MONTHS[session.getMonth()]} ${
      session.getDate() < 10 ? '0' + session.getDate() : session.getDate()
    }, ${session.getFullYear()}`;

    const daysLogin =
      Math.abs(today.getTime() - session.getTime()) / milisecondsDay;

    if (daysLogin >= 1) {
      dataLogin.last = `${Math.round(daysLogin)} days ago`;
    } else {
      dataLogin.last = `${Math.abs(
        today.getHours() - session.getHours()
      )} hours ago`;
    }

    return dataLogin;
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
