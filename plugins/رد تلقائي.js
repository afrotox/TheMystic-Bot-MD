//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا|اهلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يقلبي ✨👀*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^عفرتو|بلاك$/i.test(m.text)) { 
     responses = [ 
'*بوت بلاك و عفرتو تحت امرك*'
     ]; 
 }else if (/^عامل اى| عامل ايه$/i.test(m.text)) { 
     responses = [ 
'*بخير الحمد لله و انت/ى كيفك ✨❤️*'
     ]; 
   }else if (/^😉|😘$/i.test(m.text)) { 
     responses = [ 
'😘'
   ]; 
   }else if (/^بتحبنى|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيكى 🌚💔*',
'*اايوه 😉*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بتكرهنى$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس مش تزعل نفسك لحبك🫥*',
'*🙄مقدرش*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^منورين|منور$/i.test(m.text)) { 
     responses = [ 
'نورك آلعاكس 🌚✨'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^ قهوه|قهوة|شاى|نسكافيه $/i.test(m.text)) { 
     responses = [ 
       'اتفضل فنجان يا عزيزى 🍵',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشقق♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
