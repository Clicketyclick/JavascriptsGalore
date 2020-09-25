/**
 *  @file clocktime.js
 *  @brief Get HTML entity for time as Unicode entity
 */


/**
 *  @brief Get clock face from hours and mins
 *  
 *  @param [in] hour Hours 0-23
 *  @param [in] min 0-59
 *  @return HTML entity for clock
 *  
 *  @details Returns a HTML entity that mimics an analog clock w. ½ hour intervals
 *
 *  @url https://stackoverflow.com/a/16426519/7485823
 */
function showClockTime( hour, min) {
    var minset = (min < 30 ? 0 : 30);	 // 0-29 -> 00, 30-59 -> 30
	hour	= (hour > 11 ? hour - 12 : hour); // 12-23 -> 0-12
	var clock	= (hour *100) + minset;

	switch( clock ) {
	  case 0:
		clock	= "&#x1F55B;"; // 🕛  U+1F55B  CLOCK FACE TWELVE OCLOCK
		break;
	  case 30:
		clock	= "&#x1F567;"; // 	🕧  U+1F567  CLOCK FACE TWELVE-THIRTY
		break;
	  case 100:
		clock	= "&#x1F550;"; // 	🕐  U+1F550  CLOCK FACE ONE OCLOCK
		break;
	  case 130:
		clock	= "&#x1F55C;"; // 	🕜  U+1F55C  CLOCK FACE ONE-THIRTY
		break;
	  case 200:
		clock	= "&#x1F551;"; // 	🕑  U+1F551  CLOCK FACE TWO OCLOCK
		break;
	  case 230:
		clock	= "&#x1F55D;"; // 	🕝  U+1F55D  CLOCK FACE TWO-THIRTY
		break;
	  case 300:
		clock	= "&#x1F552;"; // 	🕒  U+1F552  CLOCK FACE THREE OCLOCK
		break;
	  case 330:
		clock	= "&#x1F55E;"; // 	🕞  U+1F55E  CLOCK FACE THREE-THIRTY
		break;
	  case 400:
		clock	= "&#x1F553;"; // 	🕓  U+1F553  CLOCK FACE FOUR OCLOCK
		break;
	  case 430:
		clock	= "&#x1F55F;"; // 	🕟  U+1F55F  CLOCK FACE FOUR-THIRTY
		break;
	  case 500:
		clock	= "&#x1F554;"; // 	🕔  U+1F554  CLOCK FACE FIVE OCLOCK
		break;
	  case 530:
		clock	= "&#x1F560;"; // 	🕠  U+1F560  CLOCK FACE FIVE-THIRTY
		break;
	  case 600:
		clock	= "&#x1F555;"; // 	🕕  U+1F555  CLOCK FACE SIX OCLOCK
		break;
	  case 630:
		clock	= "&#x1F561;"; // 	🕡  U+1F561  CLOCK FACE SIX-THIRTY
		break;
	  case 700:
		clock	= "&#x1F556;"; // 	🕖  U+1F556  CLOCK FACE SEVEN OCLOCK
		break;
	  case 730:
		clock	= "&#x1F562;"; // 	🕢  U+1F562  CLOCK FACE SEVEN-THIRTY
		break;
	  case 800:
		clock	= "&#x1F557;"; // 	🕗  U+1F557  CLOCK FACE EIGHT OCLOCK
		break;
	  case 830:
		clock	= "&#x1F563;"; // 	🕣  U+1F563  CLOCK FACE EIGHT-THIRTY
		break;
	  case 900:
		clock	= "&#x1F558;"; // 	🕘  U+1F558  CLOCK FACE NINE OCLOCK
		break;
	  case 930:
		clock	= "&#x1F564;"; // 	🕤  U+1F564  CLOCK FACE NINE-THIRTY
		break;
	  case 1000:
		clock	= "&#x1F559;"; // 	🕙  U+1F559  CLOCK FACE TEN OCLOCK
		break;
	  case 1030:
		clock	= "&#x1F565;"; // 	🕥  U+1F565  CLOCK FACE TEN-THIRTY
		break;
	  case 1100:
		clock	= "&#x1F55A;"; 
		break;
	  case 1130:
		clock	= "&#x1F566;";
		break;
	  default:
		console.log( "ups: "+ clock );
		clock	= "&#x2610;";
	}
	return clock;
}	// showClockTime()

//----------------------------------------------------------------------

/**
 *  @brief Get clock face from current time
 *  
 *  @return TML entity for clock
 *  
 *  @url https://stackoverflow.com/a/16426519/7485823
 *  @details Returns a HTML entity that mimics an analog clock w. ½ hour intervals
 */
function getClockTime() {

    var date = new Date();

    var hour = date.getHours();
    var min  = date.getMinutes();

	var clock	= showClockTime( hour, min );
    return clock;
}	// getClockTime()

//----------------------------------------------------------------------

/**
 *  @brief Get current time as ISO string
 *  
 *  @return Current date as string
 *  
 *  @url https://stackoverflow.com/a/16426519/7485823
 *  @details Date in format YYYY-MM-DDThh-mm-ss
 */
function getIsoDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + "-" + month + "-" + day + "T" + hour + ":" + min + ":" + sec;
}	// getIsoDateTime()
