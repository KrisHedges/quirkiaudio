init = () => {
  let date = new Date();
  date.setMonth(date.getMonth() +6 );
  document.cookie = 'landing-page-visited=true; expires= ' + date.toGMTString();
}

document.onreadystatechange = () => {
  if (document.readyState === "interactive") init() ;
}
