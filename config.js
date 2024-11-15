const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_30_11_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDY3LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDg3LFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMyLFxuICAgICAgICA1MixcbiAgICAgICAgMjIxLFxuICAgICAgICA1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMixcbiAgICAgICAgNjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTksXG4gICAgICAgIDcxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICA1LFxuICAgICAgICAzMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDc4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqQ0tSblRCS0hrSVJrOXZ5Q2YwUXBPem95WTFIcFNYc0N3UXdiSWhKL0JvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJYMzJSY2xFelRnQ3IwazJfM2VxUEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImEyMDBmMDYwLTlhYjItNGQwZC1hZjY5LTMwZmQ3ZDA0ODIyMVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAxNTEsXG4gICAgICA1MCxcbiAgICAgIDI0NSxcbiAgICAgIDIxNixcbiAgICAgIDksXG4gICAgICAyMDAsXG4gICAgICAyNDgsXG4gICAgICAxMDIsXG4gICAgICAyMjYsXG4gICAgICAzNyxcbiAgICAgIDIxMCxcbiAgICAgIDIxOSxcbiAgICAgIDk0LFxuICAgICAgODksXG4gICAgICA2NCxcbiAgICAgIDE3MCxcbiAgICAgIDM3LFxuICAgICAgMTA3LFxuICAgICAgNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMixcbiAgICAgIDE2MixcbiAgICAgIDExNyxcbiAgICAgIDIxMixcbiAgICAgIDIzNixcbiAgICAgIDEwNyxcbiAgICAgIDIwLFxuICAgICAgODgsXG4gICAgICAyMTgsXG4gICAgICAxNSxcbiAgICAgIDEyMixcbiAgICAgIDMwLFxuICAgICAgNjEsXG4gICAgICAxMTMsXG4gICAgICAxNzUsXG4gICAgICA0MixcbiAgICAgIDY3LFxuICAgICAgMTAzLFxuICAgICAgMTk0LFxuICAgICAgMTYxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFLQ1g1WDQ0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTAzNTYxODE3OjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQXJpYm9ibyBDb21wdXRlcnNcIixcbiAgICBcImxpZFwiOiBcIjIyODUzMDg1MDIyMzE6NTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXYzaWZNT0VJeVgzN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKaDkwRWtyVTlmTHRubzMzcUllaVo0aFhtaSs5bkwwOVM3WlBnYXlxclY4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJOOXAzdzF4OUtMVW5kU0pVMDljdGQ5bWdkcjFIU1NuTXZ5b1M5R3J4WGdtc1ZlcFFNVWxlbTdoVVJNK05YZWtDUVVVNVZNS1d3aTExbHZsb0VFL2hRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkl2SnRiTVVvdDRXcHRtZWNmN28vVnVkaWZFNnZRYVNtYVpZY2ZMOEdpa1Vhem1aekk0cXMzQkczYnJXSDdKSzFSWkF3WnM4RkN2VkM5MStaQ1Q3K2dnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMDM1NjE4MTc6NTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmlcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTcwOTg0MlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
