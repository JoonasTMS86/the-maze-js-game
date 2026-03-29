const letterWidth                            = 19;
const letterHeight                           = 19;
const tileWidth                              = 19;
const tileHeight                             = 19;
const widthOfLevelInTiles                    = 100;
const heightOfLevelInTiles                   = 47;
const sparkleAnim                            = [0, 1, 2, 3, 2, 1, 0];
var deviceWidth, deviceHeight, mainGfxBufferSdata, doubleBufferSdata,
sTileWidth, sTileHeight, mouseX, mouseY, currentGateOrButtonSettingsArrayPos,
userInput, playerStartX, playerStartY, userInputMaxLength, inputX, inputY,
enteredFilename, indexOfSelection, levelsInAlphabeticOrder, spriteAnimFrame,
spriteAnimDelay, spriteAnimPos, coordsOfSpriteAnimFrames, coordsOfTilesToClear,
animObjectType;
var fullSizeWidth                            = 1910; // Width of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var fullSizeHeight                           = 909; // Height of screen when the game is played on a screen with 1920 x 1080 resolution capability.
var typedKeyCode                             = 0;
var typedKey                                 = "";
var keyDown                                  = false;
var goingup                                  = false;
var goingdown                                = false;
var goingleft                                = false;
var goingright                               = false;
var keyBackspacePressed                      = false;
var enterPressed                             = false;
var spacePressed                             = false;
var escPressed                               = false;
var key0Pressed                              = false;
var key1Pressed                              = false;
var key2Pressed                              = false;
var key3Pressed                              = false;
var key4Pressed                              = false;
var key5Pressed                              = false;
var key6Pressed                              = false;
var key7Pressed                              = false;
var key8Pressed                              = false;
var key9Pressed                              = false;
var sPressed                                 = false;
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
var storedBgBufferBuffer                     = document.getElementById("storedBgBufferBuffer");
var storedBgBufferCtx                        = storedBgBufferBuffer.getContext("2d");
var storedBgBufferSdata                      = storedBgBufferCtx.createImageData(1910, 909);
var storedBgBuffer2Buffer                    = document.getElementById("storedBgBuffer2Buffer");
var storedBgBuffer2Ctx                       = storedBgBuffer2Buffer.getContext("2d");
var storedBgBuffer2Sdata                     = storedBgBuffer2Ctx.createImageData(1910, 909);
var storedBgBuffer3Buffer                    = document.getElementById("storedBgBuffer3Buffer");
var storedBgBuffer3Ctx                       = storedBgBuffer3Buffer.getContext("2d");
var storedBgBuffer3Sdata                     = storedBgBuffer3Ctx.createImageData(1910, 909);
var gfx_bgSprite                             = document.getElementById("gfx_bg");
var gfx_lavaBuffer                           = document.getElementById("gfx_lavaBuffer");
var gfx_lavaCtx                              = gfx_lavaBuffer.getContext("2d");
var gfx_lavaSdata                            = gfx_lavaCtx.createImageData(19, 19);
var gfx_lavaSprite                           = document.getElementById("gfx_lava");
var gfx_lava2Buffer                           = document.getElementById("gfx_lava2Buffer");
var gfx_lava2Ctx                              = gfx_lava2Buffer.getContext("2d");
var gfx_lava2Sdata                            = gfx_lava2Ctx.createImageData(19, 19);
var gfx_lava2Sprite                           = document.getElementById("gfx_lava2");
var gfx_lava3Buffer                           = document.getElementById("gfx_lava3Buffer");
var gfx_lava3Ctx                              = gfx_lava3Buffer.getContext("2d");
var gfx_lava3Sdata                            = gfx_lava3Ctx.createImageData(19, 19);
var gfx_lava3Sprite                           = document.getElementById("gfx_lava3");
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
var gfx_notselectedBuffer                    = document.getElementById("gfx_notselectedBuffer");
var gfx_notselectedCtx                       = gfx_notselectedBuffer.getContext("2d");
var gfx_notselectedSdata                     = gfx_notselectedCtx.createImageData(19, 19);
var gfx_notselectedSprite                    = document.getElementById("gfx_notselected");
var gfx_selectedBuffer                       = document.getElementById("gfx_selectedBuffer");
var gfx_selectedCtx                          = gfx_selectedBuffer.getContext("2d");
var gfx_selectedSdata                        = gfx_selectedCtx.createImageData(19, 19);
var gfx_selectedSprite                       = document.getElementById("gfx_selected");
var gfx_buttonNBuffer                        = document.getElementById("gfx_buttonNBuffer");
var gfx_buttonNCtx                           = gfx_buttonNBuffer.getContext("2d");
var gfx_buttonNSdata                         = gfx_buttonNCtx.createImageData(19, 19);
var gfx_buttonNSprite                        = document.getElementById("gfx_buttonN");
var gfx_buttonSBuffer                        = document.getElementById("gfx_buttonSBuffer");
var gfx_buttonSCtx                           = gfx_buttonSBuffer.getContext("2d");
var gfx_buttonSSdata                         = gfx_buttonSCtx.createImageData(19, 19);
var gfx_buttonSSprite                        = document.getElementById("gfx_buttonS");
var gfx_buttonEBuffer                        = document.getElementById("gfx_buttonEBuffer");
var gfx_buttonECtx                           = gfx_buttonEBuffer.getContext("2d");
var gfx_buttonESdata                         = gfx_buttonECtx.createImageData(19, 19);
var gfx_buttonESprite                        = document.getElementById("gfx_buttonE");
var gfx_buttonWBuffer                        = document.getElementById("gfx_buttonWBuffer");
var gfx_buttonWCtx                           = gfx_buttonWBuffer.getContext("2d");
var gfx_buttonWSdata                         = gfx_buttonWCtx.createImageData(19, 19);
var gfx_buttonWSprite                        = document.getElementById("gfx_buttonW");
var gfx_gatehorizontalBuffer                 = document.getElementById("gfx_gatehorizontalBuffer");
var gfx_gatehorizontalCtx                    = gfx_gatehorizontalBuffer.getContext("2d");
var gfx_gatehorizontalSdata                  = gfx_gatehorizontalCtx.createImageData(19, 19);
var gfx_gatehorizontalSprite                 = document.getElementById("gfx_gatehorizontal");
var gfx_gatehorizontal2Buffer                 = document.getElementById("gfx_gatehorizontal2Buffer");
var gfx_gatehorizontal2Ctx                    = gfx_gatehorizontal2Buffer.getContext("2d");
var gfx_gatehorizontal2Sdata                  = gfx_gatehorizontal2Ctx.createImageData(19, 19);
var gfx_gatehorizontal2Sprite                 = document.getElementById("gfx_gatehorizontal2");
var gfx_gatehorizontal3Buffer                 = document.getElementById("gfx_gatehorizontal3Buffer");
var gfx_gatehorizontal3Ctx                    = gfx_gatehorizontal3Buffer.getContext("2d");
var gfx_gatehorizontal3Sdata                  = gfx_gatehorizontal3Ctx.createImageData(19, 19);
var gfx_gatehorizontal3Sprite                 = document.getElementById("gfx_gatehorizontal3");
var gfx_gateverticalBuffer                   = document.getElementById("gfx_gateverticalBuffer");
var gfx_gateverticalCtx                      = gfx_gateverticalBuffer.getContext("2d");
var gfx_gateverticalSdata                    = gfx_gateverticalCtx.createImageData(19, 19);
var gfx_gateverticalSprite                   = document.getElementById("gfx_gatevertical");
var gfx_gatevertical2Buffer                   = document.getElementById("gfx_gatevertical2Buffer");
var gfx_gatevertical2Ctx                      = gfx_gatevertical2Buffer.getContext("2d");
var gfx_gatevertical2Sdata                    = gfx_gatevertical2Ctx.createImageData(19, 19);
var gfx_gatevertical2Sprite                   = document.getElementById("gfx_gatevertical2");
var gfx_gatevertical3Buffer                   = document.getElementById("gfx_gatevertical3Buffer");
var gfx_gatevertical3Ctx                      = gfx_gatevertical3Buffer.getContext("2d");
var gfx_gatevertical3Sdata                    = gfx_gatevertical3Ctx.createImageData(19, 19);
var gfx_gatevertical3Sprite                   = document.getElementById("gfx_gatevertical3");
var gfx_inactivegatehorizontalBuffer         = document.getElementById("gfx_inactivegatehorizontalBuffer");
var gfx_inactivegatehorizontalCtx            = gfx_inactivegatehorizontalBuffer.getContext("2d");
var gfx_inactivegatehorizontalSdata          = gfx_inactivegatehorizontalCtx.createImageData(19, 19);
var gfx_inactivegatehorizontalSprite         = document.getElementById("gfx_inactivegatehorizontal");
var gfx_inactivegateverticalBuffer           = document.getElementById("gfx_inactivegateverticalBuffer");
var gfx_inactivegateverticalCtx              = gfx_inactivegateverticalBuffer.getContext("2d");
var gfx_inactivegateverticalSdata            = gfx_inactivegateverticalCtx.createImageData(19, 19);
var gfx_inactivegateverticalSprite           = document.getElementById("gfx_inactivegatevertical");
var gfx_cursorBuffer                         = document.getElementById("gfx_cursorBuffer");
var gfx_cursorCtx                            = gfx_cursorBuffer.getContext("2d");
var gfx_cursorSdata                          = gfx_cursorCtx.createImageData(19, 19);
var gfx_cursorSprite                         = document.getElementById("gfx_cursor");
var gfx_sparkle1Buffer                       = document.getElementById("gfx_sparkle1Buffer");
var gfx_sparkle1Ctx                          = gfx_sparkle1Buffer.getContext("2d");
var gfx_sparkle1Sdata                        = gfx_sparkle1Ctx.createImageData(19, 19);
var gfx_sparkle1Sprite                       = document.getElementById("gfx_sparkle1");
var gfx_sparkle2Buffer                       = document.getElementById("gfx_sparkle2Buffer");
var gfx_sparkle2Ctx                          = gfx_sparkle2Buffer.getContext("2d");
var gfx_sparkle2Sdata                        = gfx_sparkle2Ctx.createImageData(19, 19);
var gfx_sparkle2Sprite                       = document.getElementById("gfx_sparkle2");
var gfx_sparkle3Buffer                       = document.getElementById("gfx_sparkle3Buffer");
var gfx_sparkle3Ctx                          = gfx_sparkle3Buffer.getContext("2d");
var gfx_sparkle3Sdata                        = gfx_sparkle3Ctx.createImageData(19, 19);
var gfx_sparkle3Sprite                       = document.getElementById("gfx_sparkle3");
var gfx_sparkle4Buffer                       = document.getElementById("gfx_sparkle4Buffer");
var gfx_sparkle4Ctx                          = gfx_sparkle4Buffer.getContext("2d");
var gfx_sparkle4Sdata                        = gfx_sparkle4Ctx.createImageData(19, 19);
var gfx_sparkle4Sprite                       = document.getElementById("gfx_sparkle4");
var gfx_xplode1Buffer                        = document.getElementById("gfx_xplode1Buffer");
var gfx_xplode1Ctx                           = gfx_xplode1Buffer.getContext("2d");
var gfx_xplode1Sdata                         = gfx_xplode1Ctx.createImageData(19, 19);
var gfx_xplode1Sprite                        = document.getElementById("gfx_xplode1");
var gfx_xplode2Buffer                        = document.getElementById("gfx_xplode2Buffer");
var gfx_xplode2Ctx                           = gfx_xplode2Buffer.getContext("2d");
var gfx_xplode2Sdata                         = gfx_xplode2Ctx.createImageData(19, 19);
var gfx_xplode2Sprite                        = document.getElementById("gfx_xplode2");
var gfx_xplode3Buffer                        = document.getElementById("gfx_xplode3Buffer");
var gfx_xplode3Ctx                           = gfx_xplode3Buffer.getContext("2d");
var gfx_xplode3Sdata                         = gfx_xplode3Ctx.createImageData(19, 19);
var gfx_xplode3Sprite                        = document.getElementById("gfx_xplode3");
var gfx_xplode4Buffer                        = document.getElementById("gfx_xplode4Buffer");
var gfx_xplode4Ctx                           = gfx_xplode4Buffer.getContext("2d");
var gfx_xplode4Sdata                         = gfx_xplode4Ctx.createImageData(19, 19);
var gfx_xplode4Sprite                        = document.getElementById("gfx_xplode4");
var gfx_xplode5Buffer                        = document.getElementById("gfx_xplode5Buffer");
var gfx_xplode5Ctx                           = gfx_xplode5Buffer.getContext("2d");
var gfx_xplode5Sdata                         = gfx_xplode5Ctx.createImageData(19, 19);
var gfx_xplode5Sprite                        = document.getElementById("gfx_xplode5");
var gfx_xplode6Buffer                        = document.getElementById("gfx_xplode6Buffer");
var gfx_xplode6Ctx                           = gfx_xplode6Buffer.getContext("2d");
var gfx_xplode6Sdata                         = gfx_xplode6Ctx.createImageData(19, 19);
var gfx_xplode6Sprite                        = document.getElementById("gfx_xplode6");
var gfx_xplode7Buffer                        = document.getElementById("gfx_xplode7Buffer");
var gfx_xplode7Ctx                           = gfx_xplode7Buffer.getContext("2d");
var gfx_xplode7Sdata                         = gfx_xplode7Ctx.createImageData(19, 19);
var gfx_xplode7Sprite                        = document.getElementById("gfx_xplode7");
var gfx_xplode8Buffer                        = document.getElementById("gfx_xplode8Buffer");
var gfx_xplode8Ctx                           = gfx_xplode8Buffer.getContext("2d");
var gfx_xplode8Sdata                         = gfx_xplode8Ctx.createImageData(19, 19);
var gfx_xplode8Sprite                        = document.getElementById("gfx_xplode8");
var gfx_xplode9Buffer                        = document.getElementById("gfx_xplode9Buffer");
var gfx_xplode9Ctx                           = gfx_xplode9Buffer.getContext("2d");
var gfx_xplode9Sdata                         = gfx_xplode9Ctx.createImageData(19, 19);
var gfx_xplode9Sprite                        = document.getElementById("gfx_xplode9");

var playerX                                  = 0; // TILE X pos of player
var playerY                                  = 0; // TILE Y pos of player
var currentlySelectedTile                    = 1;
var bombs                                    = 0; // Number of bombs in player's possession
var keys                                     = 0; // Number of keys in player's possession
/*
 Level data: 
 When a tile has a gate in it, the array offset for that tile contains the ID
 of that gate. When a tile has a button in it, the array offset for that tile
 contains the properties of the button (which gates are affected by the
 button).
*/
var levelData                                = [];
var gateOrButtonSettings                     = [];
var optionWindow                             = false;
var enteringInput                            = false;
var enteringIdValueForGate                   = false;
var numericInput                             = false; // This must be set to "true" if the user input field should only let you enter a number to it.
var yesOrNoQuestion                          = false;
var menuSelectionScreen                      = false;
var fileList                                 = [];
var animTimeElapsed                          = 0;
var animFrame                                = 0;
var animatingSprite                          = false;

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
	let keyBackspace = keyboard(8),
	enter = keyboard(13),
	esc = keyboard(27),
	left = keyboard(37),
	up = keyboard(38),
	right = keyboard(39),
	down = keyboard(40),
	spacebar = keyboard(32),
	key0 = keyboard(48),
	key1 = keyboard(49),
	key2 = keyboard(50),
	key3 = keyboard(51),
	key4 = keyboard(52),
	key5 = keyboard(53),
	key6 = keyboard(54),
	key7 = keyboard(55),
	key8 = keyboard(56),
	key9 = keyboard(57),
	keys = keyboard(83),
	keyx = keyboard(88),
	keyz = keyboard(90);
	// Key "Escape".
	esc.press = () =>
	{
		escPressed = true;
	};
	esc.release = () =>
	{
		escPressed = false;
	};
	// Key "Backspace".
	keyBackspace.press = () =>
	{
		keyBackspacePressed = true;
	};
	keyBackspace.release = () =>
	{
		keyBackspacePressed = false;
	};
	// Key "S".
	keys.press = () =>
	{
		sPressed = true;
	};
	keys.release = () =>
	{
		sPressed = false;
	};
	// Key "0".
	key0.press = () =>
	{
		key0Pressed = true;
	};
	key0.release = () =>
	{
		key0Pressed = false;
	};
	// Key "1".
	key1.press = () =>
	{
		key1Pressed = true;
	};
	key1.release = () =>
	{
		key1Pressed = false;
	};
	// Key "2".
	key2.press = () =>
	{
		key2Pressed = true;
	};
	key2.release = () =>
	{
		key2Pressed = false;
	};
	// Key "3".
	key3.press = () =>
	{
		key3Pressed = true;
	};
	key3.release = () =>
	{
		key3Pressed = false;
	};
	// Key "4".
	key4.press = () =>
	{
		key4Pressed = true;
	};
	key4.release = () =>
	{
		key4Pressed = false;
	};
	// Key "5".
	key5.press = () =>
	{
		key5Pressed = true;
	};
	key5.release = () =>
	{
		key5Pressed = false;
	};
	// Key "6".
	key6.press = () =>
	{
		key6Pressed = true;
	};
	key6.release = () =>
	{
		key6Pressed = false;
	};
	// Key "7".
	key7.press = () =>
	{
		key7Pressed = true;
	};
	key7.release = () =>
	{
		key7Pressed = false;
	};
	// Key "8".
	key8.press = () =>
	{
		key8Pressed = true;
	};
	key8.release = () =>
	{
		key8Pressed = false;
	};
	// Key "9".
	key9.press = () =>
	{
		key9Pressed = true;
	};
	key9.release = () =>
	{
		key9Pressed = false;
	};
	// Key "Enter".
	enter.press = () =>
	{
		enterPressed = true;
	};
	enter.release = () =>
	{
		enterPressed = false;
	};
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

function addAnimFrame(x, y) {
	coordsOfSpriteAnimFrames[coordsOfSpriteAnimFrames.length] = x * tileWidth;
	coordsOfSpriteAnimFrames[coordsOfSpriteAnimFrames.length] = y * tileHeight;
	coordsOfTilesToClear[coordsOfTilesToClear.length] = x;
	coordsOfTilesToClear[coordsOfTilesToClear.length] = y;
}

// *GFX*
function checkForOtherBallsOfTheSameColor(objectId, x, y) {
	coordsOfSpriteAnimFrames = [];
	coordsOfTilesToClear = [];
	spriteAnimFrame = 0;
	spriteAnimDelay = 0;
	spriteAnimPos = 0;

	var matches = false;
	var origPos = (y * widthOfLevelInTiles) + x;
	var posN = ((y - 1) * widthOfLevelInTiles) + x;
	var posS = ((y + 1) * widthOfLevelInTiles) + x;
	var posE = (y * widthOfLevelInTiles) + x + 1;
	var posW = (y * widthOfLevelInTiles) + x - 1;
	if((levelData[posN] & 0x1F) == objectId) {
		matches = true;
		addAnimFrame(x, y - 1);
	}
	if((levelData[posS] & 0x1F) == objectId) {
		matches = true;
		addAnimFrame(x, y + 1);
	}
	if((levelData[posE] & 0x1F) == objectId) {
		matches = true;
		addAnimFrame(x + 1, y);
	}
	if((levelData[posW] & 0x1F) == objectId) {
		matches = true;
		addAnimFrame(x - 1, y);
	}
	if(matches) {
		animatingSprite = true;
		animObjectType = 0;
		addAnimFrame(x, y);
	}
	switch(objectId) {
		case 1:
			bgInItsCurrentStateCtx.drawImage(gfx_ball1Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball1Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball1Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball1Buffer, x * 19, y * 19);
			break;
		case 2:
			bgInItsCurrentStateCtx.drawImage(gfx_ball2Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball2Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball2Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball2Buffer, x * 19, y * 19);
			break;
		case 3:
			bgInItsCurrentStateCtx.drawImage(gfx_ball3Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball3Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball3Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball3Buffer, x * 19, y * 19);
			break;
		case 4:
			bgInItsCurrentStateCtx.drawImage(gfx_ball4Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball4Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball4Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball4Buffer, x * 19, y * 19);
			break;
		case 5:
			bgInItsCurrentStateCtx.drawImage(gfx_ball5Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball5Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball5Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball5Buffer, x * 19, y * 19);
			break;
		case 6:
			bgInItsCurrentStateCtx.drawImage(gfx_ball6Buffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_ball6Buffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_ball6Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_ball6Buffer, x * 19, y * 19);
			break;
	}
}

// *GFX*
function putTile(tile, x, y) {
	var gameBoardPos = (y * widthOfLevelInTiles) + x;
	levelData[gameBoardPos] = tile;

	tile &= 0x1F;

	// First, remove any possible tile that might be at that position of the screen.
	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
	storedBgBufferCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
	storedBgBuffer2Ctx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
	storedBgBuffer3Ctx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
	switch(tile) {
		case 0:
			bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
			storedBgBufferCtx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
			storedBgBuffer2Ctx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
			storedBgBuffer3Ctx.drawImage(gfx_bgSprite, x * 19, y * 19, 19, 19, x * 19, y * 19, 19, 19);
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
			storedBgBufferCtx.drawImage(gfx_bombBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_bombBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_bombBuffer, x * 19, y * 19);
			break;
		case 8:
			bgInItsCurrentStateCtx.drawImage(gfx_boulderBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_boulderBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_boulderBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_boulderBuffer, x * 19, y * 19);
			break;
		case 9:
			bgInItsCurrentStateCtx.drawImage(gfx_crateBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_crateBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_crateBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_crateBuffer, x * 19, y * 19);
			break;
		case 10:
			bgInItsCurrentStateCtx.drawImage(gfx_crateholderBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_crateholderBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_crateholderBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_crateholderBuffer, x * 19, y * 19);
			break;
		case 11:
			bgInItsCurrentStateCtx.drawImage(gfx_keyBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_keyBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_keyBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_keyBuffer, x * 19, y * 19);
			break;
		case 12:
			bgInItsCurrentStateCtx.drawImage(gfx_lockBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_lockBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_lockBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_lockBuffer, x * 19, y * 19);
			break;
		case 13:
			bgInItsCurrentStateCtx.drawImage(gfx_fragilewallBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_fragilewallBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_fragilewallBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_fragilewallBuffer, x * 19, y * 19);
			break;
		case 14:
			bgInItsCurrentStateCtx.drawImage(gfx_wallBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_wallBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_wallBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_wallBuffer, x * 19, y * 19);
			break;
		case 15:
			bgInItsCurrentStateCtx.drawImage(gfx_lavaBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_lavaBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_lava2Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_lava3Buffer, x * 19, y * 19);
			break;
		case 16:
			bgInItsCurrentStateCtx.drawImage(gfx_buttonNBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_buttonNBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_buttonNBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_buttonNBuffer, x * 19, y * 19);
			break;
		case 17:
			bgInItsCurrentStateCtx.drawImage(gfx_buttonSBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_buttonSBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_buttonSBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_buttonSBuffer, x * 19, y * 19);
			break;
		case 18:
			bgInItsCurrentStateCtx.drawImage(gfx_buttonEBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_buttonEBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_buttonEBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_buttonEBuffer, x * 19, y * 19);
			break;
		case 19:
			bgInItsCurrentStateCtx.drawImage(gfx_buttonWBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_buttonWBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_buttonWBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_buttonWBuffer, x * 19, y * 19);
			break;
		case 20:
			bgInItsCurrentStateCtx.drawImage(gfx_gatehorizontalBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_gatehorizontalBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_gatehorizontal2Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_gatehorizontal3Buffer, x * 19, y * 19);
			break;
		case 21:
			bgInItsCurrentStateCtx.drawImage(gfx_gateverticalBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_gateverticalBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_gatevertical2Buffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_gatevertical3Buffer, x * 19, y * 19);
			break;
		case 22:
			bgInItsCurrentStateCtx.drawImage(gfx_inactivegatehorizontalBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_inactivegatehorizontalBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_inactivegatehorizontalBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_inactivegatehorizontalBuffer, x * 19, y * 19);
			break;
		case 23:
			bgInItsCurrentStateCtx.drawImage(gfx_inactivegateverticalBuffer, x * 19, y * 19);
			storedBgBufferCtx.drawImage(gfx_inactivegateverticalBuffer, x * 19, y * 19);
			storedBgBuffer2Ctx.drawImage(gfx_inactivegateverticalBuffer, x * 19, y * 19);
			storedBgBuffer3Ctx.drawImage(gfx_inactivegateverticalBuffer, x * 19, y * 19);
			break;
	}
}

function getTileCoords(x, y) {
	var xfactor = 1920 / deviceWidth;
	var yfactor = 909 / deviceHeight;
	var tileX = Math.floor((x * xfactor) / 19);
	var tileY = Math.floor((y * yfactor) / 19);
	console.log("RESULTING TILE X,TILE Y: " + tileX + "," + tileY);
	return [tileX, tileY];
}

function clickGameScreen(event) {
	var coords = getTileCoords(event.offsetX, event.offsetY);
	if(!optionWindow) {
		var dataPos = ((coords[1] * widthOfLevelInTiles) + coords[0]) * 295;
		for(var offset = 0; offset < 295; offset++) {
			gateOrButtonSettings[dataPos + offset] = 0;
		}
		putTile(currentlySelectedTile, coords[0], coords[1]);
	}
	else {
		// Mouse click handler when an option window of some sort is on the screen.
		// Gate ID checkbox tile X coords: 21 to 80
		// Gate ID checkbox tile Y coords: 4 to 43
		if(coords[0] >= 21 && coords[0] <= 79 && coords[1] >= 4 && coords[1] <= 43) {
			var checkboxNumber = ((coords[1] - 4) * 59) + coords[0] - 21;
			var clickOffset = Math.floor(checkboxNumber / 8);
			var modulo = checkboxNumber % 8;
			var bitValue = 128 >> modulo;
			console.log("clicked checkbox " + checkboxNumber);
			if((gateOrButtonSettings[currentGateOrButtonSettingsArrayPos + clickOffset] & bitValue) == 0) {
				bgInItsCurrentStateCtx.drawImage(gfx_selectedBuffer, coords[0] * 19, coords[1] * 19);
			}
			else {
				bgInItsCurrentStateCtx.drawImage(gfx_notselectedBuffer, coords[0] * 19, coords[1] * 19);
			}
			gateOrButtonSettings[currentGateOrButtonSettingsArrayPos + clickOffset] ^= bitValue;
		}
	}
}

function moveMouse(event) {
	mouseX = event.offsetX;
	mouseY = event.offsetY;
}

function putText(textX, textY, text) {
	for(var pos = 0; pos < text.length; pos++) {
		var letter = text.charCodeAt(pos) - 32;
		bgInItsCurrentStateCtx.drawImage(gfx_fontBuffer, (letter * 19), 0, letterWidth, letterHeight, textX, textY, letterWidth, letterHeight);
		textX += letterWidth;
	}
}

// Toggle all those gates that are affected by the button.
function toggleGates(buttonPos) {
	var x = 0;
	var y = 0;
	for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles); pos++) {
		if(levelData[pos] >= 20 && levelData[pos] <= 23) {
			var gateId = gateOrButtonSettings[pos * 295] + (gateOrButtonSettings[(pos * 295) + 1] * 256);
			var arrayPos = Math.floor(gateId / 8);
			var modulo = gateId % 8;
			var bitValue = 128 >> modulo;
			if((gateOrButtonSettings[buttonPos + arrayPos] & bitValue) != 0) {
				var toggledGateValue = levelData[pos] ^ 2;
				putTile(toggledGateValue, x, y);
			}
		}
		x++;
		if(x >= widthOfLevelInTiles) {
			x = 0;
			y++;
		}
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
	console.log("bumped into object id " + levelData[checkPos] + " at " + x + "," + y);
	if((levelData[checkPos] & 0x1F) < 12 || (levelData[checkPos] & 0x1F) == 22 || (levelData[checkPos] & 0x1F) == 23) {
		var tileUnderneath = 0;
		if((levelData[checkPos] & 0x80) != 0) {
			tileUnderneath = 10;
		}
		if((levelData[checkPos] & 0x40) != 0) {
			tileUnderneath = 22;
		}
		if((levelData[checkPos] & 0x20) != 0) {
			tileUnderneath = 23;
		}
		// IDs of movable objects: 1,2,3,4,5,6,8,9
		// Add 128 to the value if the object in question has a crate holder underneath it.
		if(
			(levelData[checkPos] & 0x1F) == 1 ||
			(levelData[checkPos] & 0x1F) == 2 ||
			(levelData[checkPos] & 0x1F) == 3 ||
			(levelData[checkPos] & 0x1F) == 4 ||
			(levelData[checkPos] & 0x1F) == 5 ||
			(levelData[checkPos] & 0x1F) == 6 ||
			(levelData[checkPos] & 0x1F) == 8 ||
			(levelData[checkPos] & 0x1F) == 9
		) {
			if((levelData[checkPos] & 0x1F) == 8 && levelData[newPosOfMovableObject] == 15) {
				console.log("boulder dropped into lava");
			}
			else if(
				levelData[newPosOfMovableObject] != 0 &&
				levelData[newPosOfMovableObject] != 10 &&
				levelData[newPosOfMovableObject] != 22 &&
				levelData[newPosOfMovableObject] != 23
			) {
				return false;
			}
			var markerUnderneath = 0x0;
			switch(levelData[newPosOfMovableObject]) {
				case 10:
					markerUnderneath = 0x80;
					break;
				case 22:
					markerUnderneath = 0x40;
					break;
				case 23:
					markerUnderneath = 0x20;
					break;
			}
			var tileToPut = (levelData[checkPos] & 0x1F) | markerUnderneath;
			if(levelData[newPosOfMovableObject] == 15) {
				tileToPut = 0;
			}
			console.log("newX, newY, tileToPut = " + newX + ", " + newY + ", " + tileToPut);
			putTile(tileUnderneath, x, y);
			putTile(tileToPut, newX, newY);
		}
		else if((levelData[checkPos] & 0x1F) == 7) {
			bombs++;
			console.log("bomb");
			putTile(0, x, y);
		}
		else if((levelData[checkPos] & 0x1F) == 11) {
			keys++;
			console.log("key");
			putTile(0, x, y);
		}
		return true;
	}
	else if((levelData[checkPos] & 0x1F) == 12 && keys > 0) {
		keys--;
		console.log("lock unlocked");
		putTile(0, x, y);
		return true;
	}
	else if((levelData[checkPos] & 0x1F) == 13 && bombs > 0) {
		// Animate the wall that blows up.
		coordsOfSpriteAnimFrames = [];
		coordsOfTilesToClear = [];
		spriteAnimFrame = 0;
		spriteAnimDelay = 0;
		spriteAnimPos = 0;
		animatingSprite = true;
		animObjectType = 1;
		addAnimFrame(x, y);
		bombs--;
		console.log("fragile wall blown up");
		putTile(0, x, y);
	}
	else if((levelData[checkPos] & 0x1F) >= 16 && (levelData[checkPos] & 0x1F) <= 19) {
		console.log("** PUSHED BUTTON AT X,Y POS " + x + "," + y + " **");
		currentGateOrButtonSettingsArrayPos = ((y * widthOfLevelInTiles) + x) * 295;
		toggleGates(currentGateOrButtonSettingsArrayPos);
	}
	else if((levelData[checkPos] & 0x1F) == 22) {
		return true;
	}
	else if((levelData[checkPos] & 0x1F) == 23) {
		return true;
	}
	return false;
}

function refreshScreen() {
	var tileX = 0;
	var tileY = 0;
	for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles); pos++) {
		putTile(levelData[pos], tileX, tileY);
		tileX++;
		if(tileX >= widthOfLevelInTiles) {
			tileX = 0;
			tileY++;
		}
	}
}

function putUserInputText(textX, textY) {
	for(var pos = 0; pos < (userInput.length + 2); pos++) {
		bgInItsCurrentStateCtx.drawImage(storedBgBufferBuffer, textX + (pos * 19), textY, 19, 19, textX + (pos * 19), textY, 19, 19);
	}
	var cursorX = textX + (userInput.length * letterWidth);
	putText(textX, textY, userInput);
	bgInItsCurrentStateCtx.drawImage(gfx_cursorBuffer, cursorX, textY);
}

// Second parameter should be true if the file in question is a .LEV file, otherwise false.
function loadFile(filename, isLevelFile) {
	var file_data_to_load = fetch(filename, {
		// Adding Get request
		method: "GET",
		// Setting headers
		headers: {
			'Content-Type': 'application/octet-stream',
		},
		// Setting response type to arraybuffer 
		responseType: "arraybuffer"
	})

	// Handling the received binary data
	.then(response =>{
		if (response.ok){
			return response.arrayBuffer();
		}
		console.log(filename + " loaded.");
	})
	.then(arraybuffer => {
		console.log("Status ok.");
		var loaded_file_data = new Uint8Array(arraybuffer);

		if(isLevelFile) {
			// Move data to our main buffer.
			for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles * 295); pos++) {
				gateOrButtonSettings[pos] = 0;
			}
			playerStartX = loaded_file_data[0];
			playerStartY = loaded_file_data[1];
			playerX = playerStartX;
			playerY = playerStartY;
			var propertiesPos = 2 + (widthOfLevelInTiles * heightOfLevelInTiles);
			for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles); pos++) {
				levelData[pos] = loaded_file_data[(pos + 2)];
				if(levelData[pos] >= 16 && levelData[pos] <= 19) {
					// Button properties.
					var pPos = 295 * pos;
					for(var offset = 0; offset < 295; offset++) {
						gateOrButtonSettings[pPos + offset] = loaded_file_data[propertiesPos + offset];
					}
					propertiesPos += 295;
				}
				if(levelData[pos] >= 20 && levelData[pos] <= 23) {
					// Gate properties.
					var pPos = 295 * pos;
					gateOrButtonSettings[pPos + 0] = loaded_file_data[propertiesPos + 0];
					gateOrButtonSettings[pPos + 1] = loaded_file_data[propertiesPos + 1];
					propertiesPos += 2;
				}
			}
			refreshScreen();
		}
		else {
			fileList = [];
			var listPos = 0;
			var name = "";
			for(var pos = 0; pos < (loaded_file_data.length + 1); pos++) {
				if(pos < loaded_file_data.length && loaded_file_data[pos] >= 32) {
					name += String.fromCharCode(loaded_file_data[pos]);
				}
				else {
					if(name.length > 0) {
						fileList[listPos] = name;
						name = "";
						listPos++;
					}
				}
			}
			console.log(fileList);
		}
	})
	// Handling the error
	.catch(err=>{
		console.log("Found error:", err)
	});
}

function saveLevel(filename) {
	// Save the properties of those tiles which have a gate or button in them.
	var gateOrButtonPropertiesToSave = [];
	var sourceTileSettingsPos = 0;
	var targetTileSettingsPos = 0;
	for(var pos = 0; pos < (widthOfLevelInTiles * heightOfLevelInTiles); pos++) {
		if(levelData[pos] >= 16 && levelData[pos] <= 19) {
			// Button.
			for(var i = 0; i < 295; i++) {
				gateOrButtonPropertiesToSave[targetTileSettingsPos + i] = gateOrButtonSettings[sourceTileSettingsPos + i];
			}
			targetTileSettingsPos += 295;
		}
		if(levelData[pos] >= 20 && levelData[pos] <= 23) {
			// Gate.
			gateOrButtonPropertiesToSave[targetTileSettingsPos + 0] = gateOrButtonSettings[sourceTileSettingsPos + 0];
			gateOrButtonPropertiesToSave[targetTileSettingsPos + 1] = gateOrButtonSettings[sourceTileSettingsPos + 1];
			targetTileSettingsPos += 2;
		}
		sourceTileSettingsPos += 295;
	}

	console.log("SAVING LEVEL.");
	console.log("size of level data = " + levelData.length);
	console.log("size of gateOrButtonPropertiesToSave = " + gateOrButtonPropertiesToSave.length);
	var levelDataWithSettings = [];
	var fileListToSave = [];
	var fileListPos = 0;
	for(var pos = 0; pos < fileList.length; pos++) {
		for(var i = 0; i < fileList[pos].length; i++) {
			fileListToSave[fileListPos] = fileList[pos].charCodeAt(i);
			fileListPos++;
		}
		fileListToSave[fileListPos] = 10;
		fileListPos++;
	}
	console.log(fileListToSave);
	levelDataWithSettings = levelDataWithSettings.concat(playerStartX);
	levelDataWithSettings = levelDataWithSettings.concat(playerStartY);
	levelDataWithSettings = levelDataWithSettings.concat(levelData);
	levelDataWithSettings = levelDataWithSettings.concat(gateOrButtonPropertiesToSave);
	console.log("size of levelDataWithSettings = " + levelDataWithSettings.length);

	var fileListData = new FormData();
	fileListData.append("data", fileListToSave);
	fileListData.append("fname", "filelist");
	var fileListXhr = new XMLHttpRequest();
	fileListXhr.open( 'post', 'the_maze_save.php', true );
	fileListXhr.send(fileListData);

	var data = new FormData();
	data.append("data", levelDataWithSettings);
	data.append("fname", filename);
	var xhr = new XMLHttpRequest();
	xhr.open( 'post', 'the_maze_save.php', true );
	xhr.send(data);
}

function userInputEntered() {
	optionWindow = false;
	menuSelectionScreen = false;
	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, 0, 0);
	refreshScreen();
}

function drawSelection(index) {
	// 113 = starting Y pos of selections
	var startingY = index * letterHeight;
	var ypos = fullSizeWidth * 4 * (startingY + 111);
	var ypos2 = fullSizeWidth * 4 * (startingY + 112);
	var ypos3 = fullSizeWidth * 4 * (startingY + 131);
	var ypos4 = fullSizeWidth * 4 * (startingY + 132);
	bgInItsCurrentStateSdata = bgInItsCurrentStateCtx.getImageData(0, 0, bgInItsCurrentStateBuffer.width, bgInItsCurrentStateBuffer.height);
	for(var x = 0; x < fullSizeWidth; x++) {
		bgInItsCurrentStateSdata.data[ypos + (x * 4) + 0] = 255;
		bgInItsCurrentStateSdata.data[ypos + (x * 4) + 1] = 0;
		bgInItsCurrentStateSdata.data[ypos + (x * 4) + 2] = 0;
		bgInItsCurrentStateSdata.data[ypos + (x * 4) + 3] = 255;
		bgInItsCurrentStateSdata.data[ypos2 + (x * 4) + 0] = 255;
		bgInItsCurrentStateSdata.data[ypos2 + (x * 4) + 1] = 0;
		bgInItsCurrentStateSdata.data[ypos2 + (x * 4) + 2] = 0;
		bgInItsCurrentStateSdata.data[ypos2 + (x * 4) + 3] = 255;
		bgInItsCurrentStateSdata.data[ypos3 + (x * 4) + 0] = 255;
		bgInItsCurrentStateSdata.data[ypos3 + (x * 4) + 1] = 0;
		bgInItsCurrentStateSdata.data[ypos3 + (x * 4) + 2] = 0;
		bgInItsCurrentStateSdata.data[ypos3 + (x * 4) + 3] = 255;
		bgInItsCurrentStateSdata.data[ypos4 + (x * 4) + 0] = 255;
		bgInItsCurrentStateSdata.data[ypos4 + (x * 4) + 1] = 0;
		bgInItsCurrentStateSdata.data[ypos4 + (x * 4) + 2] = 0;
		bgInItsCurrentStateSdata.data[ypos4 + (x * 4) + 3] = 255;
	}
	bgInItsCurrentStateCtx.putImageData(bgInItsCurrentStateSdata, 0, 0);
}

function doSpriteAnimation() {
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
	gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
	for(var pos = 0; pos < coordsOfSpriteAnimFrames.length; pos += 2) {
		if(animObjectType == 0) {
			switch(spriteAnimFrame) {
				case 0:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_sparkle1Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 1:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_sparkle2Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 2:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_sparkle3Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 3:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_sparkle4Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
			}
		}
		else {
			switch(spriteAnimFrame) {
				case 0:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode1Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 1:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode2Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 2:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode3Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 3:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode4Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 4:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode5Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 5:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode6Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 6:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode7Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 7:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode8Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
				case 8:
					gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_xplode9Buffer, coordsOfSpriteAnimFrames[pos + 0], coordsOfSpriteAnimFrames[pos + 1]);
					break;
			}
		}
	}
	doubleBufferCtx.drawImage(gfxScaledToCurrentDeviceResolutionBuffer, 0, 0, deviceWidth, deviceHeight);
	mainGfxBufferCtx.drawImage(doubleBuffer, 0, 0);
	var nextFrame = false;
	spriteAnimDelay++;
	switch(animObjectType) {
		case 0:
			if(spriteAnimDelay >= 6) {
				nextFrame = true;
			}
			break;
		case 1:
			if(spriteAnimDelay >= 4) {
				nextFrame = true;
			}
			break;
	}
	if(nextFrame) {
		spriteAnimDelay = 0;
		if(animObjectType == 0) {
			spriteAnimPos++;
			if(spriteAnimPos == 4) {
				for(var pos = 0; pos < coordsOfSpriteAnimFrames.length; pos += 2) {
					var tilePos = (coordsOfTilesToClear[pos + 1] * widthOfLevelInTiles) + coordsOfTilesToClear[pos + 0];
					if((levelData[tilePos] & 0x80) != 0 ) {
						putTile(10, coordsOfTilesToClear[pos + 0], coordsOfTilesToClear[pos + 1]);
					}
					else if((levelData[tilePos] & 0x40) != 0 ) {
						putTile(22, coordsOfTilesToClear[pos + 0], coordsOfTilesToClear[pos + 1]);
					}
					else if((levelData[tilePos] & 0x20) != 0 ) {
						putTile(23, coordsOfTilesToClear[pos + 0], coordsOfTilesToClear[pos + 1]);
					}
					else {
						putTile(0, coordsOfTilesToClear[pos + 0], coordsOfTilesToClear[pos + 1]);
					}
				}
			}
			if(spriteAnimPos >= sparkleAnim.length) {
				animatingSprite = false;
			}
			else {
				spriteAnimFrame = sparkleAnim[spriteAnimPos];
			}
		}
		else {
			spriteAnimFrame++;
			if(spriteAnimFrame >= 9) {
				animatingSprite = false;
			}
		}
	}
}

// *GFX*
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
	gfx_lava2Ctx.drawImage(gfx_lava2Sprite, 0, 0);
	gfx_lava3Ctx.drawImage(gfx_lava3Sprite, 0, 0);
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
	gfx_notselectedCtx.drawImage(gfx_notselectedSprite, 0, 0);
	gfx_selectedCtx.drawImage(gfx_selectedSprite, 0, 0);
	gfx_buttonNCtx.drawImage(gfx_buttonNSprite, 0, 0);
	gfx_buttonSCtx.drawImage(gfx_buttonSSprite, 0, 0);
	gfx_buttonECtx.drawImage(gfx_buttonESprite, 0, 0);
	gfx_buttonWCtx.drawImage(gfx_buttonWSprite, 0, 0);
	gfx_gatehorizontalCtx.drawImage(gfx_gatehorizontalSprite, 0, 0);
	gfx_gatehorizontal2Ctx.drawImage(gfx_gatehorizontal2Sprite, 0, 0);
	gfx_gatehorizontal3Ctx.drawImage(gfx_gatehorizontal3Sprite, 0, 0);
	gfx_gateverticalCtx.drawImage(gfx_gateverticalSprite, 0, 0);
	gfx_gatevertical2Ctx.drawImage(gfx_gatevertical2Sprite, 0, 0);
	gfx_gatevertical3Ctx.drawImage(gfx_gatevertical3Sprite, 0, 0);
	gfx_inactivegatehorizontalCtx.drawImage(gfx_inactivegatehorizontalSprite, 0, 0);
	gfx_inactivegateverticalCtx.drawImage(gfx_inactivegateverticalSprite, 0, 0);
	gfx_cursorCtx.drawImage(gfx_cursorSprite, 0, 0);
	gfx_sparkle1Ctx.drawImage(gfx_sparkle1Sprite, 0, 0);
	gfx_sparkle2Ctx.drawImage(gfx_sparkle2Sprite, 0, 0);
	gfx_sparkle3Ctx.drawImage(gfx_sparkle3Sprite, 0, 0);
	gfx_sparkle4Ctx.drawImage(gfx_sparkle4Sprite, 0, 0);
	gfx_xplode1Ctx.drawImage(gfx_xplode1Sprite, 0, 0);
	gfx_xplode2Ctx.drawImage(gfx_xplode2Sprite, 0, 0);
	gfx_xplode3Ctx.drawImage(gfx_xplode3Sprite, 0, 0);
	gfx_xplode4Ctx.drawImage(gfx_xplode4Sprite, 0, 0);
	gfx_xplode5Ctx.drawImage(gfx_xplode5Sprite, 0, 0);
	gfx_xplode6Ctx.drawImage(gfx_xplode6Sprite, 0, 0);
	gfx_xplode7Ctx.drawImage(gfx_xplode7Sprite, 0, 0);
	gfx_xplode8Ctx.drawImage(gfx_xplode8Sprite, 0, 0);
	gfx_xplode9Ctx.drawImage(gfx_xplode9Sprite, 0, 0);

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
	gfx_buttonNSdata = gfx_buttonNCtx.getImageData(0, 0, gfx_buttonNBuffer.width, gfx_buttonNBuffer.height);
	gfx_buttonSSdata = gfx_buttonSCtx.getImageData(0, 0, gfx_buttonSBuffer.width, gfx_buttonSBuffer.height);
	gfx_buttonESdata = gfx_buttonECtx.getImageData(0, 0, gfx_buttonEBuffer.width, gfx_buttonEBuffer.height);
	gfx_buttonWSdata = gfx_buttonWCtx.getImageData(0, 0, gfx_buttonWBuffer.width, gfx_buttonWBuffer.height);
	gfx_gatehorizontalSdata = gfx_gatehorizontalCtx.getImageData(0, 0, gfx_gatehorizontalBuffer.width, gfx_gatehorizontalBuffer.height);
	gfx_gatehorizontal2Sdata = gfx_gatehorizontal2Ctx.getImageData(0, 0, gfx_gatehorizontal2Buffer.width, gfx_gatehorizontal2Buffer.height);
	gfx_gatehorizontal3Sdata = gfx_gatehorizontal3Ctx.getImageData(0, 0, gfx_gatehorizontal3Buffer.width, gfx_gatehorizontal3Buffer.height);
	gfx_gateverticalSdata = gfx_gateverticalCtx.getImageData(0, 0, gfx_gateverticalBuffer.width, gfx_gateverticalBuffer.height);
	gfx_gatevertical2Sdata = gfx_gatevertical2Ctx.getImageData(0, 0, gfx_gatevertical2Buffer.width, gfx_gatevertical2Buffer.height);
	gfx_gatevertical3Sdata = gfx_gatevertical3Ctx.getImageData(0, 0, gfx_gatevertical3Buffer.width, gfx_gatevertical3Buffer.height);
	gfx_inactivegatehorizontalSdata = gfx_inactivegatehorizontalCtx.getImageData(0, 0, gfx_inactivegatehorizontalBuffer.width, gfx_inactivegatehorizontalBuffer.height);
	gfx_inactivegateverticalSdata = gfx_inactivegateverticalCtx.getImageData(0, 0, gfx_inactivegateverticalBuffer.width, gfx_inactivegateverticalBuffer.height);
	gfx_sparkle1Sdata = gfx_sparkle1Ctx.getImageData(0, 0, gfx_sparkle1Buffer.width, gfx_sparkle1Buffer.height);
	gfx_sparkle2Sdata = gfx_sparkle2Ctx.getImageData(0, 0, gfx_sparkle2Buffer.width, gfx_sparkle2Buffer.height);
	gfx_sparkle3Sdata = gfx_sparkle3Ctx.getImageData(0, 0, gfx_sparkle3Buffer.width, gfx_sparkle3Buffer.height);
	gfx_sparkle4Sdata = gfx_sparkle4Ctx.getImageData(0, 0, gfx_sparkle4Buffer.width, gfx_sparkle4Buffer.height);
	gfx_xplode1Sdata = gfx_xplode1Ctx.getImageData(0, 0, gfx_xplode1Buffer.width, gfx_xplode1Buffer.height);
	gfx_xplode2Sdata = gfx_xplode2Ctx.getImageData(0, 0, gfx_xplode2Buffer.width, gfx_xplode2Buffer.height);
	gfx_xplode3Sdata = gfx_xplode3Ctx.getImageData(0, 0, gfx_xplode3Buffer.width, gfx_xplode3Buffer.height);
	gfx_xplode4Sdata = gfx_xplode4Ctx.getImageData(0, 0, gfx_xplode4Buffer.width, gfx_xplode4Buffer.height);
	gfx_xplode5Sdata = gfx_xplode5Ctx.getImageData(0, 0, gfx_xplode5Buffer.width, gfx_xplode5Buffer.height);
	gfx_xplode6Sdata = gfx_xplode6Ctx.getImageData(0, 0, gfx_xplode6Buffer.width, gfx_xplode6Buffer.height);
	gfx_xplode7Sdata = gfx_xplode7Ctx.getImageData(0, 0, gfx_xplode7Buffer.width, gfx_xplode7Buffer.height);
	gfx_xplode8Sdata = gfx_xplode8Ctx.getImageData(0, 0, gfx_xplode8Buffer.width, gfx_xplode8Buffer.height);
	gfx_xplode9Sdata = gfx_xplode9Ctx.getImageData(0, 0, gfx_xplode9Buffer.width, gfx_xplode9Buffer.height);
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
	doSpriteTransparency(gfx_buttonNCtx, gfx_buttonNBuffer, gfx_buttonNSdata, 59, 59, 59);
	doSpriteTransparency(gfx_buttonSCtx, gfx_buttonSBuffer, gfx_buttonSSdata, 59, 59, 59);
	doSpriteTransparency(gfx_buttonECtx, gfx_buttonEBuffer, gfx_buttonESdata, 59, 59, 59);
	doSpriteTransparency(gfx_buttonWCtx, gfx_buttonWBuffer, gfx_buttonWSdata, 59, 59, 59);
	doSpriteTransparency(gfx_gatehorizontalCtx, gfx_gatehorizontalBuffer, gfx_gatehorizontalSdata, 59, 59, 59);
	doSpriteTransparency(gfx_gatehorizontal2Ctx, gfx_gatehorizontal2Buffer, gfx_gatehorizontal2Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_gatehorizontal3Ctx, gfx_gatehorizontal3Buffer, gfx_gatehorizontal3Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_gateverticalCtx, gfx_gateverticalBuffer, gfx_gateverticalSdata, 59, 59, 59);
	doSpriteTransparency(gfx_gatevertical2Ctx, gfx_gatevertical2Buffer, gfx_gatevertical2Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_gatevertical3Ctx, gfx_gatevertical3Buffer, gfx_gatevertical3Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_inactivegatehorizontalCtx, gfx_inactivegatehorizontalBuffer, gfx_inactivegatehorizontalSdata, 59, 59, 59);
	doSpriteTransparency(gfx_inactivegateverticalCtx, gfx_inactivegateverticalBuffer, gfx_inactivegateverticalSdata, 59, 59, 59);
	doSpriteTransparency(gfx_sparkle1Ctx, gfx_sparkle1Buffer, gfx_sparkle1Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_sparkle2Ctx, gfx_sparkle2Buffer, gfx_sparkle2Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_sparkle3Ctx, gfx_sparkle3Buffer, gfx_sparkle3Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_sparkle4Ctx, gfx_sparkle4Buffer, gfx_sparkle4Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode1Ctx, gfx_xplode1Buffer, gfx_xplode1Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode2Ctx, gfx_xplode2Buffer, gfx_xplode2Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode3Ctx, gfx_xplode3Buffer, gfx_xplode3Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode4Ctx, gfx_xplode4Buffer, gfx_xplode4Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode5Ctx, gfx_xplode5Buffer, gfx_xplode5Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode6Ctx, gfx_xplode6Buffer, gfx_xplode6Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode7Ctx, gfx_xplode7Buffer, gfx_xplode7Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode8Ctx, gfx_xplode8Buffer, gfx_xplode8Sdata, 59, 59, 59);
	doSpriteTransparency(gfx_xplode9Ctx, gfx_xplode9Buffer, gfx_xplode9Sdata, 59, 59, 59);

	gfx_fontCtx.drawImage(gfx_fontSprite, 0, 0);
	gfx_fontSdata = gfx_fontCtx.getImageData(0, 0, gfx_fontBuffer.width, gfx_fontBuffer.height);
	doSpriteTransparency(gfx_fontCtx, gfx_fontBuffer, gfx_fontSdata, 146, 41, 0); // 0x92 0x29 0x00

	bgInItsCurrentStateCtx.drawImage(gfx_bgSprite, 0, 0);
	storedBgBufferCtx.drawImage(gfx_bgSprite, 0, 0);
	storedBgBuffer2Ctx.drawImage(gfx_bgSprite, 0, 0);
	storedBgBuffer3Ctx.drawImage(gfx_bgSprite, 0, 0);

	sTileWidth = Math.floor(deviceWidth / widthOfLevelInTiles);
	sTileHeight = Math.floor(deviceHeight / heightOfLevelInTiles);
	console.log("sTileWidth, sTileHeight = " + sTileWidth + ", " + sTileHeight);
	loadFile("simple example.lev", true);
	loadFile("filelist", false);

	document.addEventListener('keydown', indicateHeldDownKey);
	document.addEventListener('keyup', indicateReleasedKey);
	function indicateHeldDownKey(e) {
		keyDown = true;
		typedKeyCode = e.keyCode;
		typedKey = e.key;
	}
	function indicateReleasedKey(e) {
		keyDown = false;
	}
};

// *GFX*
function play(delta)
{
	if(doubleBufferSdata != null) {
		if(animatingSprite) {
			doSpriteAnimation();
		}
		else {
			if(!optionWindow && !enteringInput) {
				animTimeElapsed++;
				if(animTimeElapsed >= 25) {
					animTimeElapsed = 0;
					animFrame++;
					if(animFrame >= 3) {
						animFrame = 0;
					}
					switch(animFrame) {
						case 0:
							bgInItsCurrentStateCtx.drawImage(storedBgBufferBuffer, 0, 0);
							break;
						case 1:
							bgInItsCurrentStateCtx.drawImage(storedBgBuffer2Buffer, 0, 0);
							break;
						case 2:
							bgInItsCurrentStateCtx.drawImage(storedBgBuffer3Buffer, 0, 0);
							break;
					}
				}
			}
			gfxScaledToCurrentDeviceResolutionCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
			if(!optionWindow) {
				gfxScaledToCurrentDeviceResolutionCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
			}
			doubleBufferCtx.drawImage(gfxScaledToCurrentDeviceResolutionBuffer, 0, 0, deviceWidth, deviceHeight);
			mainGfxBufferCtx.drawImage(doubleBuffer, 0, 0);
		}
	}
	if(!animatingSprite && !mustReleaseKey) {

		if(menuSelectionScreen) {
			if(goingup && indexOfSelection > 0) {
				mustReleaseKey = true;
				console.log("* UP *");
				indexOfSelection--;
				bgInItsCurrentStateCtx.drawImage(storedBgBuffer2Buffer, 0, 0);
				drawSelection(indexOfSelection);
			}
			if(goingdown && indexOfSelection < (levelsInAlphabeticOrder.length - 1)) {
				mustReleaseKey = true;
				console.log("* DOWN *");
				indexOfSelection++;
				bgInItsCurrentStateCtx.drawImage(storedBgBuffer2Buffer, 0, 0);
				drawSelection(indexOfSelection);
			}
		}

		if(yesOrNoQuestion) {
			if(keyDown && typedKeyCode == 89) {
				keyDown = false;
				typedKeyCode = 0;
				console.log("answered yes");
				userInputEntered();
				enteringInput = false;
				optionWindow = false;
				yesOrNoQuestion = false;
				saveLevel(enteredFilename);
			}
			if(keyDown && typedKeyCode == 78) {
				keyDown = false;
				typedKeyCode = 0;
				console.log("answered no");
				userInputEntered();
				enteringInput = false;
				optionWindow = false;
				yesOrNoQuestion = false;
			}
		}
		else {
			if(escPressed) {
				mustReleaseKey = true;
				if(optionWindow || enteringInput) {
					enteringInput = false;
					userInputEntered();
				}
			}
			if(!enteringInput && typedKeyCode == 76) {
				keyDown = false;
				typedKeyCode = 0;
				mustReleaseKey = true;
				optionWindow = true;
				enteringInput = false;
				enteringIdValueForGate = false;
				menuSelectionScreen = true;
				indexOfSelection = 0;
				bgInItsCurrentStateCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
				storedBgBufferCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
				putText(860, 37, "LOAD LEVEL");
				putText(0, 75, "USE UP & DOWN ARROW KEYS, ENTER TO SELECT. PRESS ESC TO CANCEL.");
				levelsInAlphabeticOrder = fileList;
				levelsInAlphabeticOrder.sort();
				for(var pos = 0; pos < levelsInAlphabeticOrder.length; pos++) {
					putText(0, 113 + (pos * 19), levelsInAlphabeticOrder[pos].toUpperCase());
				}
				storedBgBuffer2Ctx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
				drawSelection(indexOfSelection);
			}
			if(!enteringInput && sPressed) {
				keyDown = false;
				typedKeyCode = 0;
				mustReleaseKey = true;
				optionWindow = true;
				enteringInput = true;
				enteringIdValueForGate = false;
				userInputMaxLength = 100;
				userInput = "";
				numericInput = false;
				bgInItsCurrentStateCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
				storedBgBufferCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
				putText(813, 37, "SAVE YOUR LEVEL");
				putText(0, 75, "ENTER FILENAME FOR YOUR THE MAZE LEVEL OR PRESS ESC TO CANCEL SAVING:");
				inputX = 0;
				inputY = 94;
				putUserInputText(inputX, inputY);
			}
			if(keyBackspacePressed) {
				mustReleaseKey = true;
				if(optionWindow && enteringInput) {
					userInput = userInput.slice(0, -1);
					putUserInputText(inputX, inputY);
				}
			}
			if(enteringInput) {
				if(keyDown) {
					if(typedKeyCode >= 32) {
						if(numericInput) {
							if(typedKeyCode >= 48 && typedKeyCode <= 57) {
								if(userInput.length < userInputMaxLength) {
									userInput += String.fromCharCode(typedKeyCode);
									putUserInputText(inputX, inputY);
								}
							}
						}
						else {
							if(userInput.length < userInputMaxLength && typedKey.length == 1 &&
								typedKey != "\\" &&
								typedKey != "/" &&
								typedKey != ":" &&
								typedKey != "*" &&
								typedKey != "?" &&
								typedKey != "\"" &&
								typedKey != "<" &&
								typedKey != ">" &&
								typedKey != "|" &&
								typedKey != "@" &&
								typedKey != "£" &&
								typedKey != "$" &&
								typedKey != "{" &&
								typedKey != "[" &&
								typedKey != "]" &&
								typedKey != "}" &&
								typedKey != "#" &&
								typedKey != "¤" &&
								typedKey != "%" &&
								typedKey != "&" &&
								typedKey != "=" &&
								typedKey != "^" &&
								typedKey != "§" &&
								typedKey != "½" &&
								typedKey != "å" &&
								typedKey != "Å" &&
								typedKey != "ä" &&
								typedKey != "Ä" &&
								typedKey != "ö" &&
								typedKey != "Ö"
							) {
								userInput += typedKey.toUpperCase();
								putUserInputText(inputX, inputY);
							}
						}
					}
					keyDown = false;
					typedKeyCode = 0;
				}
			}
			if(enterPressed) {
				var tileCoords = getTileCoords(mouseX, mouseY);
				mustReleaseKey = true;
				if(!optionWindow) {
					var gameBoardPos = (tileCoords[1] * widthOfLevelInTiles) + tileCoords[0];
					if(levelData[gameBoardPos] >= 16 && levelData[gameBoardPos] <= 19) {
						optionWindow = true;
						var buttonDataPos = ((tileCoords[1] * widthOfLevelInTiles) + tileCoords[0]) * 295;
						var bitValue = 0x80;
						currentGateOrButtonSettingsArrayPos = buttonDataPos;
						bgInItsCurrentStateCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
						// 2360 gates = 2360 bits = 295 bytes
						putText(494, 56, "CHOOSE WHICH GATE IDS ARE AFFECTED BY THIS BUTTON");
						putText(940, 836, "OK");
						for(var row = 0; row < 40; row++) {
							for(var col = 0; col < 59; col++) {
								if((gateOrButtonSettings[buttonDataPos] & bitValue) != 0) {
									bgInItsCurrentStateCtx.drawImage(gfx_selectedBuffer, 399 + (col * 19), 76 + (row * 19));
								}
								else {
									bgInItsCurrentStateCtx.drawImage(gfx_notselectedBuffer, 399 + (col * 19), 76 + (row * 19));
								}
								bitValue >>= 1;
								if(bitValue == 0) {
									bitValue = 0x80;
									buttonDataPos++;
								}
							}
						}
					}
					else if(levelData[gameBoardPos] >= 20 && levelData[gameBoardPos] <= 23) {
						optionWindow = true;
						enteringInput = true;
						numericInput = true;
						enteringIdValueForGate = true;
						userInputMaxLength = 4;
						bgInItsCurrentStateCtx.drawImage(gfx_protagonistBuffer, playerX * tileWidth, playerY * tileHeight);
						storedBgBufferCtx.drawImage(bgInItsCurrentStateBuffer, 0, 0);
						currentGateOrButtonSettingsArrayPos = gameBoardPos * 295;
						var gateId = gateOrButtonSettings[gameBoardPos * 295] + (gateOrButtonSettings[(gameBoardPos * 295) + 1] * 256);
						userInput = "" + gateId;
						putText(494, 56, "GATE ID:");
						putText(494, 75, "PRESS ENTER TO CONFIRM.");
						inputX = 665;
						inputY = 56;
						putUserInputText(inputX, inputY);
					}
				}
				else if(menuSelectionScreen) {
					console.log("Chose to load level: " + levelsInAlphabeticOrder[indexOfSelection]);
					userInputEntered();
					loadFile(levelsInAlphabeticOrder[indexOfSelection], true);
					loadFile("filelist", false);
				}
				else {
					if(enteringInput) {
						if(userInput.length > 0) {
							if(enteringIdValueForGate) {
								userInputEntered();
								enteringInput = false;
								var value = parseInt(userInput);
								if(value > 2359) {
									value = 2359;
								}
								var valueB2 = Math.floor(value / 256);
								var valueB1 = value - (valueB2 * 256);
								gateOrButtonSettings[currentGateOrButtonSettingsArrayPos + 0] = valueB1;
								gateOrButtonSettings[currentGateOrButtonSettingsArrayPos + 1] = valueB2;
							}
							else {
								enteredFilename = userInput.trim().toLowerCase();
								enteredFilename = enteredFilename.concat(".lev");
								console.log("TODO: save the file");
								console.log("filename:");
								console.log(enteredFilename);
								// Check that no file with the given filename exists. Otherwise, inform the user.
								var exists = false;
								for(var pos = 0; pos < fileList.length; pos++) {
									if(fileList[pos] == enteredFilename) {
										exists = true;
										pos = fileList.length;
									}
								}
								if(exists) {
									keyDown = false;
									typedKeyCode = 0;
									yesOrNoQuestion = true;
									putText(0, 132, "FILE ALREADY EXISTS. OVERWRITE? (Y / N)");
								}
								else {
									fileList[fileList.length] = enteredFilename;
									console.log("filelist:");
									console.log(fileList);
									userInputEntered();
									enteringInput = false;
									optionWindow = false;
									saveLevel(enteredFilename);
								}
							}
						}
					}
					else {
						userInputEntered();
					}
				}
			}
		}

		if(!optionWindow) {
			if(zPressed) {
				mustReleaseKey = true;
				console.log("prev tile");
				currentlySelectedTile--;
				if(currentlySelectedTile < 0) {
					currentlySelectedTile = 23;
				}
			}
			if(xPressed) {
				mustReleaseKey = true;
				console.log("next tile");
				currentlySelectedTile++;
				if(currentlySelectedTile > 23) {
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
	}
	if(!escPressed && !keyBackspacePressed && !sPressed && !key0Pressed && !key1Pressed && !key2Pressed && !key3Pressed && !key4Pressed && !key5Pressed && !key6Pressed && !key7Pressed && !key8Pressed && !key9Pressed && !zPressed && !xPressed && !goingup && !goingdown && !goingleft && !goingright && !enterPressed && !spacePressed) {
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
