const generateAcc = (userid) => {
  let randNums = '';
  userid = userid + '';

  for (let i = 0; i < 4; i++) {
    const rnum = Math.floor(Math.random() * 10);
    randNums += rnum;
  }
  const accountNum = `4576${randNums}00000000`;
  const results = accountNum.substring(0, accountNum.length - userid.length) + userid;

  return results;
};

const formatAcc = acc => acc.replace(/(\d)(?=(\d{4})+$)/g, '$1 ');


export {generateAcc, formatAcc}
