/**
 *  @file       handleImage.js
 *  @brief      Library for image routines
 *  
 *  @details    addImageSizeToTitle	Add size to title
 *  @copyright  http://www.gnu.org/licenses/lgpl.txt LGPL version 3
 *  @author     Erik Bachmann <ErikBachmann@ClicketyClick.dk>
 *  @since      2020-10-29T08:40:29
 *  @version    2020-10-29T08:47:51
 */


/**
 *  @brief Add image dimentions to title
 *  
 *  @param [in] img Description for img
 *  @return     Return description
 *  
 *  @details    Get images original size and append dimentions to title
 *  
 *  @example    <script src="handleImage.js"></script>
 *  @example    <img src="test.jpg" id='image' onLoad='addImageSizeToTitle(this);'>
 *  
 *  @since      2020-10-29T08:38:29
 */
function addImageSizeToTitle( img ) {
	//console.log( img.naturalWidth  + 'x' + img.naturalHeight );
	img.title += " Size=" + img.naturalWidth  + 'x' + img.naturalHeight;
}	// addImageSizeToTitle()

/*** End of File ***/
