let init = () => {

  let date = new Date();
  date.setMonth(date.getMonth() +6 );
  document.cookie = 'landing-page-visited=true; expires= ' + date.toGMTString();

  let audioPresentation = new AudioPresentation();
  audioPresentation.start();
}

document.onreadystatechange = () => {
  if (document.readyState === "interactive") init() ;
}
