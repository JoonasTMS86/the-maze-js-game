var deviceWidth, deviceHeight, mainGfxBufferSdata, doubleBufferSdata, sTileWidth, sTileHeight;
var fullSizeWidth                            = 1910; // Width of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var fullSizeHeight                           = 909; // Height of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var goingup                                  = false;
var goingdown                                = false;
var goingleft                                = false;
var goingright                               = false;
var spacePressed                             = false;
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
const letterWidth                            = 19;
const letterHeight                           = 19;
const tileWidth                              = 19;
const tileHeight                             = 19;
const widthOfLevelInTiles                    = 100;
const heightOfLevelInTiles                   = 47;

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
	spacebar = keyboard(32);
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

function clickGameScreen(event) {
	var xfactor = 1920 / deviceWidth;
	var yfactor = 909 / deviceHeight;
	console.log("clicked x,y: " + event.offsetX + "," + event.offsetY);
	var x = Math.floor((event.offsetX * xfactor) / 19);
	var y = Math.floor((event.offsetY * yfactor) / 19);
	console.log("RESULTING TILE X,TILE Y: " + x + "," + y);
	bgInItsCurrentStateCtx.drawImage(gfx_lavaBuffer, x * 19, y * 19);
}

function putText(textX, textY, text) {
	for(var pos = 0; pos < text.length; pos++) {
		var letter = text.charCodeAt(pos) - 32;
		bgInItsCurrentStateCtx.drawImage(gfx_fontBuffer, (letter * 19), 0, letterWidth, letterHeight, textX, textY, letterWidth, letterHeight);
		textX += letterWidth;
	}
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

	gfx_fontCtx.drawImage(gfx_fontSprite, 0, 0);
	gfx_fontSdata = gfx_fontCtx.getImageData(0, 0, gfx_fontBuffer.width, gfx_fontBuffer.height);
	doSpriteTransparency(gfx_fontCtx, gfx_fontBuffer, gfx_fontSdata, 146, 41, 0); // 0x92 0x29 0x00

	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, 0, 0);
	putText(50, 50, "CHOOSE TILE");

	sTileWidth = Math.floor(deviceWidth / widthOfLevelInTiles);
	sTileHeight = Math.floor(deviceHeight / heightOfLevelInTiles);
	console.log("sTileWidth, sTileHeight = " + sTileWidth + ", " + sTileHeight);

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
		if(goingup) {
			mustReleaseKey = true;
			if(playerY > 0) {
				playerY--;
			}
		}
		if(goingdown) {
			mustReleaseKey = true;
			if(playerY < (heightOfLevelInTiles - 1)) {
				playerY++;
			}
		}
		if(goingleft) {
			mustReleaseKey = true;
			if(playerX > 0) {
				playerX--;
			}
		}
		if(goingright) {
			mustReleaseKey = true;
			if(playerX < (widthOfLevelInTiles - 1)) {
				playerX++;
			}
		}
	}
	if(!goingup && !goingdown && !goingleft && !goingright && !spacePressed) {
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
