const letterWidth                            = 19;
const letterHeight                           = 19;
const tileWidth                              = 19;
const tileHeight                             = 19;
const widthOfLevelInTiles                    = 100;
const heightOfLevelInTiles                   = 47;
var deviceWidth, deviceHeight, mainGfxBufferSdata, doubleBufferSdata, sTileWidth, sTileHeight;
var fullSizeWidth                            = 1910; // Width of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var fullSizeHeight                           = 909; // Height of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var goingup                                  = false;
var goingdown                                = false;
var goingleft                                = false;
var goingright                               = false;
var spacePressed                             = false;
var zPressed                                 = false;
var xPressed                                 = false;
var mustReleaseKey                           = false;
var mainGfxBuffer                            = document.getElementById("mainGfxBuffer");
var mainGfxBufferCtx                         = mainGfxBuffer.getContext("2d");
var doubleBuffer                             = document.getElementById("doubleBuffer");
var doubleBufferCtx                          = doubleBuffer.getContext("2d");
var gfxScaledToCurrentDeviceResolutionBuffer = document.getElementById("gfxScaledToCurrentDeviceResolutionBuffer");
var gfxScaledToCurrentDeviceResolutionCtx    = gfxScaledToCurrentDeviceResolutionBuffer.getContext("2d");
var gfxScaledToCurrentDeviceResolutionSdata  = gfxScaledToCurrentDeviceResolutionCtx.createImageData(1910, 909);
var bgInItsCurrentStateBuffer                = document.getElementById("bgInItsCurrentStateBuffer");
var bgInItsCurrentStateCtx                   = bgInItsCurrentStateBuffer.getContext("2d");
var bgInItsCurrentStateSdata                 = bgInItsCurrentStateCtx.createImageData(1910, 909);
var gfx_bgSprite                             = document.getElementById("gfx_bg");
var gfx_lavaBuffer                           = document.getElementById("gfx_lavaBuffer");
var gfx_lavaCtx                              = gfx_lavaBuffer.getContext("2d");
var gfx_lavaSdata                            = gfx_lavaCtx.createImageData(19, 19);
var gfx_lavaSprite                           = document.getElementById("gfx_lava");
var gfx_ball1Buffer                          = document.getElementById("gfx_ball1Buffer");
var gfx_ball1Ctx                             = gfx_ball1Buffer.getContext("2d");
var gfx_ball1Sdata                           = gfx_ball1Ctx.createImageData(19, 19);
var gfx_ball1Sprite                          = document.getElementById("gfx_ball1");
var gfx_ball2Buffer                          = document.getElementById("gfx_ball2Buffer");
var gfx_ball2Ctx                             = gfx_ball2Buffer.getContext("2d");
var gfx_ball2Sdata                           = gfx_ball2Ctx.createImageData(19, 19);
var gfx_ball2Sprite                          = document.getElementById("gfx_ball2");
var gfx_ball3Buffer                          = document.getElementById("gfx_ball3Buffer");
var gfx_ball3Ctx                             = gfx_ball3Buffer.getContext("2d");
var gfx_ball3Sdata                           = gfx_ball3Ctx.createImageData(19, 19);
var gfx_ball3Sprite                          = document.getElementById("gfx_ball3");
var gfx_ball4Buffer                          = document.getElementById("gfx_ball4Buffer");
var gfx_ball4Ctx                             = gfx_ball4Buffer.getContext("2d");
var gfx_ball4Sdata                           = gfx_ball4Ctx.createImageData(19, 19);
var gfx_ball4Sprite                          = document.getElementById("gfx_ball4");
var gfx_ball5Buffer                          = document.getElementById("gfx_ball5Buffer");
var gfx_ball5Ctx                             = gfx_ball5Buffer.getContext("2d");
var gfx_ball5Sdata                           = gfx_ball5Ctx.createImageData(19, 19);
var gfx_ball5Sprite                          = document.getElementById("gfx_ball5");
var gfx_ball6Buffer                          = document.getElementById("gfx_ball6Buffer");
var gfx_ball6Ctx                             = gfx_ball6Buffer.getContext("2d");
var gfx_ball6Sdata                           = gfx_ball6Ctx.createImageData(19, 19);
var gfx_ball6Sprite                          = document.getElementById("gfx_ball6");
var gfx_bombBuffer                           = document.getElementById("gfx_bombBuffer");
var gfx_bombCtx                              = gfx_bombBuffer.getContext("2d");
var gfx_bombSdata                            = gfx_bombCtx.createImageData(19, 19);
var gfx_bombSprite                           = document.getElementById("gfx_bomb");
var gfx_boulderBuffer                        = document.getElementById("gfx_boulderBuffer");
var gfx_boulderCtx                           = gfx_boulderBuffer.getContext("2d");
var gfx_boulderSdata                         = gfx_boulderCtx.createImageData(19, 19);
var gfx_boulderSprite                        = document.getElementById("gfx_boulder");
var gfx_crateBuffer                          = document.getElementById("gfx_crateBuffer");
var gfx_crateCtx                             = gfx_crateBuffer.getContext("2d");
var gfx_crateSdata                           = gfx_crateCtx.createImageData(19, 19);
var gfx_crateSprite                          = document.getElementById("gfx_crate");
var gfx_crateholderBuffer                    = document.getElementById("gfx_crateholderBuffer");
var gfx_crateholderCtx                       = gfx_crateholderBuffer.getContext("2d");
var gfx_crateholderSdata                     = gfx_crateholderCtx.createImageData(19, 19);
var gfx_crateholderSprite                    = document.getElementById("gfx_crateholder");
var gfx_fragilewallBuffer                    = document.getElementById("gfx_fragilewallBuffer");
var gfx_fragilewallCtx                       = gfx_fragilewallBuffer.getContext("2d");
var gfx_fragilewallSdata                     = gfx_fragilewallCtx.createImageData(19, 19);
var gfx_fragilewallSprite                    = document.getElementById("gfx_fragilewall");
var gfx_keyBuffer                            = document.getElementById("gfx_keyBuffer");
var gfx_keyCtx                               = gfx_keyBuffer.getContext("2d");
var gfx_keySdata                             = gfx_keyCtx.createImageData(19, 19);
var gfx_keySprite                            = document.getElementById("gfx_key");
var gfx_lockBuffer                           = document.getElementById("gfx_lockBuffer");
var gfx_lockCtx                              = gfx_lockBuffer.getContext("2d");
var gfx_lockSdata                            = gfx_lockCtx.createImageData(19, 19);
var gfx_lockSprite                           = document.getElementById("gfx_lock");
var gfx_wallBuffer                           = document.getElementById("gfx_wallBuffer");
var gfx_wallCtx                              = gfx_wallBuffer.getContext("2d");
var gfx_wallSdata                            = gfx_wallCtx.createImageData(19, 19);
var gfx_wallSprite                           = document.getElementById("gfx_wall");
var gfx_protagonistBuffer                    = document.getElementById("gfx_protagonistBuffer");
var gfx_protagonistCtx                       = gfx_protagonistBuffer.getContext("2d");
var gfx_protagonistSdata                     = gfx_protagonistCtx.createImageData(19, 19);
var gfx_protagonistSprite                    = document.getElementById("gfx_protagonist");
var gfx_fontBuffer                           = document.getElementById("gfx_fontBuffer");
var gfx_fontCtx                              = gfx_fontBuffer.getContext("2d");
var gfx_fontSdata                            = gfx_fontCtx.createImageData(1216, 19);
var gfx_fontSprite                           = document.getElementById("gfx_font");
var playerX                                  = 0; // TILE X pos of player
var playerY                                  = 0; // TILE Y pos of player
var currentlySelectedTile                    = 1;
var bombs                                    = 0; // Number of bombs in player's possession
var keys                                     = 0; // Number of keys in player's possession
var gameBoard                                = [];

let Application = PIXI.Application,
	Container = PIXI.Container,
	loader = PIXI.loader,
	resources = PIXI.loader.resources,
	TextureCache = PIXI.utils.TextureCache,
	Sprite = PIXI.Sprite;
let app = new Application(
{
	width: fullSizeWidth, 
	height: fullSizeHeight,
	antialiasing: false, 
	transparent: false, 
	resolution: 1,
	forceCanvas: true
}
);
loader
	.load(setup);

function setup() 
{
	// Capture the keyboard arrow keys.
	let left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40),
	spacebar = keyboard(32),
	keyz = keyboard(90),
	keyx = keyboard(88);
	// Key "Z".
	keyz.press = () =>
	{
		zPressed = true;
	};
	keyz.release = () =>
	{
		zPressed = false;
	};
	// Key "X".
	keyx.press = () =>
	{
		xPressed = true;
	};
	keyx.release = () =>
	{
		xPressed = false;
	};
	// Key "Space".
	spacebar.press = () =>
	{
		spacePressed = true;
	};
	spacebar.release = () =>
	{
		spacePressed = false;
	};
	// Key "Up Arrow Key".
	up.press = () =>
	{
		goingup = true;
	};
	up.release = () =>
	{
		goingup = false;
	};
	// Key "Down Arrow Key".
	down.press = () =>
	{
		goingdown = true;
	};
	down.release = () =>
	{
		goingdown = false;
	};
	// Key "Left Arrow Key".
	left.press = () =>
	{
		goingleft = true;
	};
	left.release = () =>
	{
		goingleft = false;
	};
	// Key "Right Arrow Key".
	right.press = () =>
	{
		goingright = true;
	};
	right.release = () =>
	{
		goingright = false;
	};
	state = play;
	app.ticker.add(delta => gameLoop(delta));
}

function updateStatus()
{
	requestAnimationFrame(updateStatus);
}

function gameLoop(delta)
{
	state(delta);
}

function doSpriteTransparency(givenbufferctx, givenbuffer, givenpic, keyR, keyG, keyB)
{
	var sizeofit = 4 * givenbuffer.width * givenbuffer.height;
	for(var tpPos = 0; tpPos < sizeofit; tpPos += 4)
	{
		if(givenpic.data[tpPos + 0] == keyR && givenpic.data[tpPos + 1] == keyG && givenpic.data[tpPos + 2] == keyB) {
			givenpic.data[tpPos + 3] = 0;
		}
	}
	givenbufferctx.putImageData(givenpic, 0, 0);
}

function checkForOtherBallsOfTheSameColor(objectId, x, y) {
	var matches = false;
	var origPos = (y * widthOfLevelInTiles) + x;
	var posN = ((y - 1) * widthOfLevelInTiles) + x;
	var posS = ((y + 1) * widthOfLevelInTiles) + x;
	var posE = (y * widthOfLevelInTiles) + x + 1;
	var posW = (y * widthOfLevelInTiles) + x - 1;
	if(gameBoard[posN] == objectId) {
		matches = true;
		bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, (y - 1) * 19, 19, 19);
		gameBoard[posN] = 0;
	}
	if(gameBoard[posS] == objectId) {
		matches = true;
		bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, (y + 1) * 19, 19, 19);
		gameBoard[posS] = 0;
	}
	if(gameBoard[posE] == objectId) {
		matches = true;
		bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, (x + 1) * 19, y * 19, 19, 19);
		gameBoard[posE] = 0;
	}
	if(gameBoard[posW] == objectId) {
		matches = true;
		bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, (x - 1) * 19, y * 19, 19, 19);
		gameBoard[posW] = 0;
	}
	if(matches) {
		bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
		gameBoard[origPos] = 0;
	}
	else {
		switch(objectId) {
			case 1:
				bgInItsCurrentStateCtx.drawImage(gfx_ball1Buffer, x * 19, y * 19);
				break;
			case 2:
				bgInItsCurrentStateCtx.drawImage(gfx_ball2Buffer, x * 19, y * 19);
				break;
			case 3:
				bgInItsCurrentStateCtx.drawImage(gfx_ball3Buffer, x * 19, y * 19);
				break;
			case 4:
				bgInItsCurrentStateCtx.drawImage(gfx_ball4Buffer, x * 19, y * 19);
				break;
			case 5:
				bgInItsCurrentStateCtx.drawImage(gfx_ball5Buffer, x * 19, y * 19);
				break;
			case 6:
				bgInItsCurrentStateCtx.drawImage(gfx_ball6Buffer, x * 19, y * 19);
				break;
		}
	}
}

function putTile(tile, x, y) {
	var gameBoardPos = (y * widthOfLevelInTiles) + x;
	gameBoard[gameBoardPos] = tile;

	tile &= 0x7F;

	// First, remove any possible tile that might be at that position of the screen.
	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
	switch(tile) {
		case 0:
			bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
			break;
		case 1:
			checkForOtherBallsOfTheSameColor(1, x, y);
			break;
		case 2:
			checkForOtherBallsOfTheSameColor(2, x, y);
			break;
		case 3:
			checkForOtherBallsOfTheSameColor(3, x, y);
			break;
		case 4:
			checkForOtherBallsOfTheSameColor(4, x, y);
			break;
		case 5:
			checkForOtherBallsOfTheSameColor(5, x, y);
			break;
		case 6:
			checkForOtherBallsOfTheSameColor(6, x, y);
			break;
		case 7:
			bgInItsCurrentStateCtx.drawImage(gfx_bombBuffer, x * 19, y * 19);
			break;
		case 8:
			bgInItsCurrentStateCtx.drawImage(gfx_boulderBuffer, x * 19, y * 19);
			break;
		case 9:
			bgInItsCurrentStateCtx.drawImage(gfx_crateBuffer, x * 19, y * 19);
			break;
		case 10:
			bgInItsCurrentStateCtx.drawImage(gfx_crateholderBuffer, x * 19, y * 19);
			break;
		case 11:
			bgInItsCurrentStateCtx.drawImage(gfx_keyBuffer, x * 19, y * 19);
			break;
		case 12:
			bgInItsCurrentStateCtx.drawImage(gfx_lockBuffer, x * 19, y * 19);
			break;
		case 13:
			bgInItsCurrentStateCtx.drawImage(gfx_fragilewallBuffer, x * 19, y * 19);
			break;
		case 14:
			bgInItsCurrentStateCtx.drawImage(gfx_wallBuffer, x * 19, y * 19);
			break;
		case 15:
			bgInItsCurrentStateCtx.drawImage(gfx_lavaBuffer, x * 19, y * 19);
			break;
	}
}

function clickGameScreen(event) {
	var xfactor = 1920 / deviceWidth;
	var yfactor = 909 / deviceHeight;
	console.log("clicked x,y: " + event.offsetX + "," + event.offsetY);
	var x = Math.floor((event.offsetX * xfactor) / 19);
	var y = Math.floor((event.offsetY * yfactor) / 19);
	console.log("RESULTING TILE X,TILE Y: " + x + "," + y);
	putTile(currentlySelectedTile, x, y);
}

function putText(textX, textY, text) {
	for(var pos = 0; pos < text.length; pos++) {
		var letter = text.charCodeAt(pos) - 32;
		bgInItsCurrentStateCtx.drawImage(gfx_fontBuffer, (letter * 19), 0, letterWidth, letterHeight, textX, textY, letterWidth, letterHeight);
		textX += letterWidth;
	}
}

// Directions: 0 = N   1 = S   2 = E   3 = W
function canMove(x, y, direction) {
	var newPosOfMovableObject, newX, newY;
	newX = x;
	newY = y;
	switch(direction) {
		case 0:
			y--;
			newY = y - 1;
			newPosOfMovableObject = ((y - 1) * widthOfLevelInTiles) + x;
			break;
		case 1:
			y++;
			newY = y + 1;
			newPosOfMovableObject = ((y + 1) * widthOfLevelInTiles) + x;
			break;
		case 2:
			x++;
			newX = x + 1;
			newPosOfMovableObject = (y * widthOfLevelInTiles) + x + 1;
			break;
		case 3:
			x--;
			newX = x - 1;
			newPosOfMovableObject = (y * widthOfLevelInTiles) + x - 1;
			break;
	}
	var checkPos = (y * widthOfLevelInTiles) + x;
	console.log("bumped into object id " + gameBoard[checkPos] + " at " + x + "," + y);
	if((gameBoard[checkPos] & 0x7F) < 12) {
		var tileUnderneath = 0;
		if((gameBoard[checkPos] & 0x80) != 0) {
			tileUnderneath = 10;
		}
		// IDs of movable objects: 1,2,3,4,5,6,8,9
		// Add 128 to the value if the object in question has a crate holder underneath it.
		if(
			(gameBoard[checkPos] & 0x7F) == 1 ||
			(gameBoard[checkPos] & 0x7F) == 2 ||
			(gameBoard[checkPos] & 0x7F) == 3 ||
			(gameBoard[checkPos] & 0x7F) == 4 ||
			(gameBoard[checkPos] & 0x7F) == 5 ||
			(gameBoard[checkPos] & 0x7F) == 6 ||
			(gameBoard[checkPos] & 0x7F) == 8 ||
			(gameBoard[checkPos] & 0x7F) == 9
		) {
			if((gameBoard[checkPos] & 0x7F) == 8 && gameBoard[newPosOfMovableObject] == 15) {
				console.log("boulder dropped into lava");
			}
			else if(gameBoard[newPosOfMovableObject] != 0 && gameBoard[newPosOfMovableObject] != 10) {
				return false;
			}
			var markerUnderneath = 0x0;
			if(gameBoard[newPosOfMovableObject] == 10) {
				console.log("YES!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
				markerUnderneath = 0x80;
			}
			var tileToPut = (gameBoard[checkPos] & 0x7F) | markerUnderneath;
			if(gameBoard[newPosOfMovableObject] == 15) {
				tileToPut = 0;
			}
			console.log("newX, newY, tileToPut = " + newX + ", " + newY + ", " + tileToPut);
			putTile(tileUnderneath, x, y);
			putTile(tileToPut, newX, newY);
		}
		else if((gameBoard[checkPos] & 0x7F) == 7) {
			bombs++;
			console.log("bomb");
			putTile(0, x, y);
		}
		else if((gameBoard[checkPos] & 0x7F) == 11) {
			keys++;
			console.log("key");
			putTile(0, x, y);
		}
		return true;
	}
	else if((gameBoard[checkPos] & 0x7F) == 12 && keys > 0) {
		keys--;
		console.log("lock unlocked");
		putTile(0, x, y);
		return true;
	}
	else if((gameBoard[checkPos] & 0x7F) == 13 && bombs > 0) {
		bombs--;
		console.log("fragile wall blown up");
		putTile(0, x, y);
	}
	return false;
}

window.onload = function() {
	// Detect the resolution of the user's device in order to scale images correctly.
	screen_width  = window.screen.availWidth;
	screen_height = window.screen.availHeight;

	console.log("SCREEN DIMENSIONS: " + screen_width + " x " + screen_height);

	var gfx1 = document.getElementById("mainGfxBuffer");
	var gfx2 = document.getElementById("doubleBuffer");
	deviceWidth = screen_width - 10;
	deviceHeight = screen_height - 137;
	// Resolutions:
	// * 1920 x 1080 (1920 x 1046) (1910 x 909)
	// * 1366 x 768 (1366 x 736) (1356 x 599)
	// * 412 x 915 (412 x 915) (402 x 778) portrait, 915 x 412 (915 x 412) (905 x 275) landscape

	gfx1.width = deviceWidth;
	gfx1.height = deviceHeight;
	gfx2.width = deviceWidth;
	gfx2.height = deviceHeight;

	mainGfxBufferSdata = mainGfxBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	mainGfxBufferCtx.putImageData(mainGfxBufferSdata, 0, 0);
	mainGfxBufferSdata = mainGfxBufferCtx.getImageData(0, 0, mainGfxBuffer.width, mainGfxBuffer.height);

	doubleBufferSdata = doubleBufferCtx.createImageData(fullSizeWidth, fullSizeHeight);
	doubleBufferCtx.putImageData(doubleBufferSdata, 0, 0);
	doubleBufferSdata = doubleBufferCtx.getImageData(0, 0, doubleBuffer.width, doubleBuffer.height);

	gfx_lavaCtx.drawImage(gfx_lavaSprite, 0, 0);
	gfx_protagonistCtx.drawImage(gfx_protagonistSprite, 0, 0);
	gfx_ball1Ctx.drawImage(gfx_ball1Sprite, 0, 0);
	gfx_ball2Ctx.drawImage(gfx_ball2Sprite, 0, 0);
	gfx_ball3Ctx.drawImage(gfx_ball3Sprite, 0, 0);
	gfx_ball4Ctx.drawImage(gfx_ball4Sprite, 0, 0);
	gfx_ball5Ctx.drawImage(gfx_ball5Sprite, 0, 0);
	gfx_ball6Ctx.drawImage(gfx_ball6Sprite, 0, 0);
	gfx_bombCtx.drawImage(gfx_bombSprite, 0, 0);
	gfx_boulderCtx.drawImage(gfx_boulderSprite, 0, 0);
	gfx_crateCtx.drawImage(gfx_crateSprite, 0, 0);
	gfx_crateholderCtx.drawImage(gfx_crateholderSprite, 0, 0);
	gfx_fragilewallCtx.drawImage(gfx_fragilewallSprite, 0, 0);
	gfx_keyCtx.drawImage(gfx_keySprite, 0, 0);
	gfx_lockCtx.drawImage(gfx_lockSprite, 0, 0);
	gfx_wallCtx.drawImage(gfx_wallSprite, 0, 0);

	gfx_ball1Sdata = gfx_ball1Ctx.getImageData(0, 0, gfx_ball1Buffer.width, gfx_ball1Buffer.height);
	gfx_ball2Sdata = gfx_ball2Ctx.getImageData(0, 0, gfx_ball2Buffer.width, gfx_ball2Buffer.height);
	gfx_ball3Sdata = gfx_ball3Ctx.getImageData(0, 0, gfx_ball3Buffer.width, gfx_ball3Buffer.height);
	gfx_ball4Sdata = gfx_ball4Ctx.getImageData(0, 0, gfx_ball4Buffer.width, gfx_ball4Buffer.height);
	gfx_ball5Sdata = gfx_ball5Ctx.getImageData(0, 0, gfx_ball5Buffer.width, gfx_ball5Buffer.height);
	gfx_ball6Sdata = gfx_ball6Ctx.getImageData(0, 0, gfx_ball6Buffer.width, gfx_ball6Buffer.height);
	gfx_bombSdata = gfx_bombCtx.getImageData(0, 0, gfx_bombBuffer.width, gfx_bombBuffer.height);
	gfx_boulderSdata = gfx_boulderCtx.getImageData(0, 0, gfx_boulderBuffer.width, gfx_boulderBuffer.height);
	gfx_crateSdata = gfx_crateCtx.getImageData(0, 0, gfx_crateBuffer.width, gfx_crateBuffer.height);
	gfx_crateholderSdata = gfx_crateholderCtx.getImageData(0, 0, gfx_crateholderBuffer.width, gfx_crateholderBuffer.height);
	gfx_keySdata = gfx_keyCtx.getImageData(0, 0, gfx_keyBuffer.width, gfx_keyBuffer.height);
	gfx_lockSdata = gfx_lockCtx.getImageData(0, 0, gfx_lockBuffer.width, gfx_lockBuffer.height);
	doSpriteTransparency(gfx_ball1Ctx, gfx_ball1Buffer, gfx_ball1Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_ball2Ctx, gfx_ball2Buffer, gfx_ball2Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_ball3Ctx, gfx_ball3Buffer, gfx_ball3Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_ball4Ctx, gfx_ball4Buffer, gfx_ball4Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_ball5Ctx, gfx_ball5Buffer, gfx_ball5Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_ball6Ctx, gfx_ball6Buffer, gfx_ball6Sdata, 255, 255, 255);
	doSpriteTransparency(gfx_bombCtx, gfx_bombBuffer, gfx_bombSdata, 255, 255, 255);
	doSpriteTransparency(gfx_boulderCtx, gfx_boulderBuffer, gfx_boulderSdata, 255, 255, 255);
	doSpriteTransparency(gfx_crateCtx, gfx_crateBuffer, gfx_crateSdata, 255, 255, 255);
	doSpriteTransparency(gfx_crateholderCtx, gfx_crateholderBuffer, gfx_crateholderSdata, 255, 255, 255);
	doSpriteTransparency(gfx_keyCtx, gfx_keyBuffer, gfx_keySdata, 255, 255, 255);
	doSpriteTransparency(gfx_lockCtx, gfx_lockBuffer, gfx_lockSdata, 255, 255, 255);

	gfx_fontCtx.drawImage(gfx_fontSprite, 0, 0);
	gfx_fontSdata = gfx_fontCtx.getImageData(0, 0, gfx_fontBuffer.width, gfx_fontBuffer.height);
	doSpriteTransparency(gfx_fontCtx, gfx_fontBuffer, gfx_fontSdata, 146, 41, 0); // 0x92 0x29 0x00

	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, 0, 0);

	sTileWidth = Math.floor(deviceWidth / widthOfLevelInTiles);
	sTileHeight = Math.floor(deviceHeight / heightOfLevelInTiles);
	console.log("sTileWidth, sTileHeight = " + sTileWidth + ", " + sTileHeight);
	for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles); pos++) {
		gameBoard[pos] = 0;
	}
};

function play(delta)
{
	if(doubleBufferSdata != null) {
		gfxScaledToCurrentDeviceResolutionCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
		gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
		doubleBufferCtx.drawImage(gfxScaledToCurrentDeviceResolutionBuffer, 0, 0, deviceWidth, deviceHeight);
		mainGfxBufferCtx.drawImage(doubleBuffer, 0, 0);
	}
	if(!mustReleaseKey) {
		if(zPressed) {
			mustReleaseKey = true;
			console.log("prev tile");
			currentlySelectedTile--;
			if(currentlySelectedTile < 0) {
				currentlySelectedTile = 15;
			}
		}
		if(xPressed) {
			mustReleaseKey = true;
			console.log("next tile");
			currentlySelectedTile++;
			if(currentlySelectedTile > 15) {
				currentlySelectedTile = 0;
			}
		}
		if(goingup) {
			mustReleaseKey = true;
			if(canMove(playerX , playerY, 0)) {
				if(playerY > 0) {
					playerY--;
				}
			}
		}
		if(goingdown) {
			mustReleaseKey = true;
			if(canMove(playerX , playerY, 1)) {
				if(playerY < (heightOfLevelInTiles - 1)) {
					playerY++;
				}
			}
		}
		if(goingright) {
			mustReleaseKey = true;
			if(canMove(playerX , playerY, 2)) {
				if(playerX < (widthOfLevelInTiles - 1)) {
					playerX++;
				}
			}
		}
		if(goingleft) {
			mustReleaseKey = true;
			if(canMove(playerX , playerY, 3)) {
				if(playerX > 0) {
					playerX--;
				}
			}
		}
	}
	if(!zPressed && !xPressed && !goingup && !goingdown && !goingleft && !goingright && !spacePressed) {
		mustReleaseKey = false;
	}
}

function keyboard(keyCode)
{
	var key = {};
	key.code = keyCode;
	key.isDown = false;
	key.isUp = true;
	key.press = undefined;
	key.release = undefined;
	key.downHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.press)
			{
				key.press();
				key.isDown = true;
				key.isUp = false;
			}
		}
		event.preventDefault();
	};
	key.upHandler = event =>
	{
		if (event.keyCode === key.code)
		{
			if (key.isDown && key.release)
			{
				key.release();
				key.isDown = false;
				key.isUp = true;
			}
		}
		event.preventDefault();
	};
	window.addEventListener("keydown", key.downHandler.bind(key), false);
	window.addEventListener("keyup", key.upHandler.bind(key), false);
	return key;
}
