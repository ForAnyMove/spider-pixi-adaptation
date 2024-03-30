const gameState = {
  app: null,
}

// Safe constants

const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight
const sizeKoef = WIDTH / 950
const texturesLink = './public/assets/Sprites'

// Initializing the game

const app = new PIXI.Application()
await app.init({ autoResize: true, resizeTo: window })
console.log(app.canvas);
document.body.appendChild(app.canvas)

// Load textures

await PIXI.Assets.load(`${texturesLink}/Backgrounds/Background_MainMenu.jpg`)

await PIXI.Assets.load(`${texturesLink}/Logos/Logo_RU.png`)

await PIXI.Assets.load(`${texturesLink}/Frames/Used_Frame_01.png`)

await PIXI.Assets.load(`${texturesLink}/Buttons/Used_Button_01.png`)
await PIXI.Assets.load(`${texturesLink}/Buttons/Used_Button_2.2.png`)

await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Profile.png`)
await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Settings.png`)
await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Story.png`)
await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Trial.png`)
await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Skins.png`)
await PIXI.Assets.load(`${texturesLink}/Icons/Icon_Booster.png`)

// Styles

const generalStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 24,
  fill: 'white',
  stroke: '#ffffaa',
  strokeThickness: 2,
})

const mainStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 24,
  fill: '#459910',
  stroke: '#000000',
  strokeThickness: 2,
})

const subStyle = new PIXI.TextStyle({
  fontFamily: 'Arial',
  fontSize: 24,
  fill: '#45aa10',
  stroke: '#000000',
  strokeThickness: 1,
})

// Main scene container

const mainTab = new PIXI.Container()

// Background

let background = PIXI.Sprite.from(`${texturesLink}/Backgrounds/Background_MainMenu.jpg`)
background.width = WIDTH
background.height = HEIGHT
app.stage.addChild(background)

// Logo

let logo = PIXI.Sprite.from(`${texturesLink}/Logos/Logo_RU.png`)
logo.scale = 0.2*sizeKoef
logo.position.set(0, logo.height/2)
logo.anchor.set(0.5);
mainTab.addChild(logo)

// General text

const generalText = new PIXI.Text('ПАСЬЯНС ПАУЧИХА', generalStyle);
generalText.scale = 0.6*sizeKoef
generalText.position.set(0, HEIGHT/2+HEIGHT/100*13)
generalText.anchor.set(0.5);
mainTab.addChild(generalText)

// Frames
const footerContainer = new PIXI.Container()

let footer = PIXI.Sprite.from(`${texturesLink}/Frames/Used_Frame_01.png`)
footer.scale = 0.5*sizeKoef
footer.position.set(0, 30)
footerContainer.position.set(WIDTH/2, HEIGHT)
footer.anchor.set(0.5);
footerContainer.addChild(footer)

// Buttons

// Container for 1 btn

const longGreenBtn1 = new PIXI.Container()
let longGreenPanel1 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel1.anchor.set(0.5);
longGreenBtn1.addChild(longGreenPanel1)

const longGreenMainText1 = new PIXI.Text('Одна масть', mainStyle);
longGreenMainText1.scale = 2
longGreenMainText1.position.set(0, -40)
longGreenMainText1.anchor.set(0.5);
longGreenBtn1.addChild(longGreenMainText1)

const longGreenSubText1 = new PIXI.Text('новичок', subStyle);
longGreenSubText1.scale = 1.6
longGreenSubText1.position.set(0, 20)
longGreenSubText1.anchor.set(0.5);
longGreenBtn1.addChild(longGreenSubText1)

longGreenBtn1.scale = 0.3*sizeKoef
longGreenBtn1.x = 0-WIDTH/100*20
longGreenBtn1.y = HEIGHT/2+HEIGHT/100*5
mainTab.addChild(longGreenBtn1)

// Container for 2 btn
const longGreenBtn2 = new PIXI.Container()
let longGreenPanel2 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel2.anchor.set(0.5);
longGreenBtn2.addChild(longGreenPanel2)

const longGreenMainText2 = new PIXI.Text('Две масти', mainStyle);
longGreenMainText2.scale = 2
longGreenMainText2.position.set(0, -40)
longGreenMainText2.anchor.set(0.5);
longGreenBtn2.addChild(longGreenMainText2)

const longGreenSubText2 = new PIXI.Text('новичок', subStyle);
longGreenSubText2.scale = 1.6
longGreenSubText2.position.set(0, 20)
longGreenSubText2.anchor.set(0.5);
longGreenBtn2.addChild(longGreenSubText2)

longGreenBtn2.scale = 0.3*sizeKoef
longGreenBtn2.x = 0
longGreenBtn2.y = HEIGHT/2 + HEIGHT/100*5
mainTab.addChild(longGreenBtn2)

// Container for 3 btn

const longGreenBtn3 = new PIXI.Container()
let longGreenPanel3 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel3.anchor.set(0.5);
longGreenBtn3.addChild(longGreenPanel3)

const longGreenMainText3 = new PIXI.Text('Четыре масти', mainStyle);
longGreenMainText3.scale = 2
longGreenMainText3.position.set(0, -40)
longGreenMainText3.anchor.set(0.5);
longGreenBtn3.addChild(longGreenMainText3)

const longGreenSubText3 = new PIXI.Text('новичок', subStyle);
longGreenSubText3.scale = 1.6
longGreenSubText3.position.set(0, 20)
longGreenSubText3.anchor.set(0.5);
longGreenBtn3.addChild(longGreenSubText3)

longGreenBtn3.scale = 0.3*sizeKoef
longGreenBtn3.x = 0+WIDTH/100*20
longGreenBtn3.y = HEIGHT/2+HEIGHT/100*5
mainTab.addChild(longGreenBtn3)

// Container for 4 btn

const longGreenBtn4 = new PIXI.Container()
let longGreenPanel4 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel4.anchor.set(0.5);
longGreenBtn4.addChild(longGreenPanel4)

const longGreenMainText4 = new PIXI.Text('Одна масть', mainStyle);
longGreenMainText4.scale = 2
longGreenMainText4.position.set(0, -40)
longGreenMainText4.anchor.set(0.5);
longGreenBtn4.addChild(longGreenMainText4)

const longGreenSubText4 = new PIXI.Text('новичок', subStyle);
longGreenSubText4.scale = 1.6
longGreenSubText4.position.set(0, 20)
longGreenSubText4.anchor.set(0.5);
longGreenBtn4.addChild(longGreenSubText4)

longGreenBtn4.scale = 0.3*sizeKoef
longGreenBtn4.x = 0-WIDTH/100*20
longGreenBtn4.y = HEIGHT/2+HEIGHT/100*20
mainTab.addChild(longGreenBtn4)

// Container for 5 btn

const longGreenBtn5 = new PIXI.Container()
let longGreenPanel5 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel5.anchor.set(0.5);
longGreenBtn5.addChild(longGreenPanel5)

const longGreenMainText5 = new PIXI.Text('Две масти', mainStyle);
longGreenMainText5.scale = 2
longGreenMainText5.position.set(0, -40)
longGreenMainText5.anchor.set(0.5);
longGreenBtn5.addChild(longGreenMainText5)

const longGreenSubText5 = new PIXI.Text('новичок', subStyle);
longGreenSubText5.scale = 1.6
longGreenSubText5.position.set(0, 20)
longGreenSubText5.anchor.set(0.5);
longGreenBtn5.addChild(longGreenSubText5)

longGreenBtn5.scale = 0.3*sizeKoef
longGreenBtn5.x = 0
longGreenBtn5.y = HEIGHT/2+HEIGHT/100*20
mainTab.addChild(longGreenBtn5)

// Container for 6 btn

const longGreenBtn6 = new PIXI.Container()
let longGreenPanel6 = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_2.2.png`)
longGreenPanel6.anchor.set(0.5);
longGreenBtn6.addChild(longGreenPanel6)

const longGreenMainText6 = new PIXI.Text('Четыре масти', mainStyle);
longGreenMainText6.scale = 2
longGreenMainText6.position.set(0, -40)
longGreenMainText6.anchor.set(0.5);
longGreenBtn6.addChild(longGreenMainText6)

const longGreenSubText6 = new PIXI.Text('новичок', subStyle);
longGreenSubText6.scale = 1.6
longGreenSubText6.position.set(0, 20)
longGreenSubText6.anchor.set(0.5);
longGreenBtn6.addChild(longGreenSubText6)

longGreenBtn6.scale = 0.3*sizeKoef
longGreenBtn6.x = 0+WIDTH/100*20
longGreenBtn6.y = HEIGHT/2+HEIGHT/100*20
mainTab.addChild(longGreenBtn6)

// Container for Profile button

const signInCoinBtn = new PIXI.Container()

let signInCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
signInCoinBtn.addChild(signInCoin)

let profileIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Profile.png`)
profileIcon.scale = 0.45
profileIcon.position.set(30, 20)

signInCoinBtn.addChild(profileIcon)
signInCoinBtn.scale = 0.3*sizeKoef

app.stage.addChild(signInCoinBtn)

// Container for settings button

const settingsCoinBtn = new PIXI.Container()

let settingsCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
settingsCoinBtn.addChild(settingsCoin)

let settingsIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Settings.png`)
settingsIcon.scale = 0.45
settingsIcon.position.set(30, 20)

settingsCoinBtn.addChild(settingsIcon)
settingsCoinBtn.scale = 0.3*sizeKoef

app.stage.addChild(settingsCoinBtn)

// Container for StoryMode button

const storyModeCoinBtn = new PIXI.Container()

let storyModeCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
storyModeCoinBtn.addChild(storyModeCoin)

let storyModeIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Story.png`)
storyModeIcon.scale = 0.45
storyModeIcon.position.set(30, 20)
storyModeCoinBtn.addChild(storyModeIcon)

const storyModeText = new PIXI.Text('История', generalStyle);
storyModeText.scale = 1.6
storyModeText.position.set(5, 170)
storyModeCoinBtn.addChild(storyModeText)

storyModeCoinBtn.scale = 0.3*sizeKoef
storyModeCoinBtn.x = 0 - WIDTH/100*18-storyModeCoinBtn.width/2;
storyModeCoinBtn.y = 0 - HEIGHT/100*8-storyModeCoinBtn.height/2;
footerContainer.addChild(storyModeCoinBtn)

// Container for Challenges button

const challengeCoinBtn = new PIXI.Container()

let challengeCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
challengeCoinBtn.addChild(challengeCoin)

let challengeIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Trial.png`)
challengeIcon.scale = 0.45
challengeIcon.position.set(30, 20)
challengeCoinBtn.addChild(challengeIcon)

const challengeText = new PIXI.Text('Испытания', generalStyle);
challengeText.scale = 1.6
challengeText.position.set(-15, 170)
challengeCoinBtn.addChild(challengeText)

challengeCoinBtn.scale = 0.3*sizeKoef
challengeCoinBtn.x = 0 - WIDTH/100*6-challengeCoinBtn.width/2;
challengeCoinBtn.y = 0 - HEIGHT/100*8-challengeCoinBtn.height/2;
footerContainer.addChild(challengeCoinBtn)

// Container for Skins button

const skinsCoinBtn = new PIXI.Container()

let skinsCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
skinsCoinBtn.addChild(skinsCoin)

let skinsIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Skins.png`)
skinsIcon.scale = 0.45
skinsIcon.position.set(30, 20)
skinsCoinBtn.addChild(skinsIcon)

const skinsText = new PIXI.Text('Скины', generalStyle);
skinsText.scale = 1.6
skinsText.position.set(15, 170)
skinsCoinBtn.addChild(skinsText)

skinsCoinBtn.scale = 0.3*sizeKoef
skinsCoinBtn.x = 0 + WIDTH/100*6-skinsCoinBtn.width/2;
skinsCoinBtn.y = 0 - HEIGHT/100*8-skinsCoinBtn.height/2;
footerContainer.addChild(skinsCoinBtn)

// Container for Bonuses button

const bonusesCoinBtn = new PIXI.Container()

let bonusesCoin = PIXI.Sprite.from(`${texturesLink}/Buttons/Used_Button_01.png`)
bonusesCoinBtn.addChild(bonusesCoin)

let bonusesIcon = PIXI.Sprite.from(`${texturesLink}/Icons/Icon_Booster.png`)
bonusesIcon.scale = 0.45
bonusesIcon.position.set(30, 20)
bonusesCoinBtn.addChild(bonusesIcon)

const bonusesText = new PIXI.Text('Бонусы', generalStyle);
bonusesText.scale = 1.6
bonusesText.position.set(15, 170)
bonusesCoinBtn.addChild(bonusesText)

bonusesCoinBtn.scale = 0.3*sizeKoef
bonusesCoinBtn.x = 0 + WIDTH/100*18-bonusesCoinBtn.width/2;
bonusesCoinBtn.y = 0 - HEIGHT/100*8-bonusesCoinBtn.height/2;
footerContainer.addChild(bonusesCoinBtn)



app.stage.addChild(footerContainer)
app.stage.addChild(mainTab)

// Animations

app.ticker.add((delta) => {
  const currentWidth = window.innerWidth
  const currentHeight = window.innerHeight
  signInCoinBtn.position.set(currentWidth/100*5-signInCoinBtn.width/2, currentHeight/100*10-signInCoinBtn.height/2)
  settingsCoinBtn.position.set(currentWidth - currentWidth/100*5-settingsCoinBtn.width/2, currentHeight/100*10-settingsCoinBtn.height/2)
  mainTab.position.set(currentWidth/2, 0)
  background.width = currentWidth
  background.height = currentHeight
  footerContainer.position.set(currentWidth/2, currentHeight)
});