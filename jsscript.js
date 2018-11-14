var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
    "Scorpio", "Sagittarius", "Capricorn", "not available because this is not a real date"];

var messages = [" You my freind are very energetic full of excitement. " +
" Hard work and success are there, too, but your greatest " +
"progress may be made internally rather than externally.", " You may have spent the past few weeks exploring new horizons, " +
" meeting new people, going out more frequently in the evening, or even making short trips away from home. " +
" Today's celestial configuration is giving you the incentive you need to stabilize yourself. ", "You're likely to enjoy today's change of tone, Aries. " +
"Don't you feel a need to take friendships beyond the superficial level? " +
"Perhaps you should reestablish contact with some former friends, too, although you may find that you have some bonds to repair.", "This year, Taurus, you can expect to be somewhat more enterprising in your relationships." +
" You may find new friends or enjoy spending quality time with some old ones. " +
"Perhaps you will look forward to an intensification of your love life.", "Recent aspects have allowed you to affirm yourself at work and, in a more general way, cement some aspects of your personality. " +
"Now you will be consolidating things. It's as if you've conceived of a product, created it, and are now finally ready to put it on the market. " +
"If this is in fact the case, Gemini, the current period corresponds to incoming money - and profits.", "This years planetary aspects herald the beginning of an especially agreeable period." +
" You will carry confidence, clarity, and positive influence wherever you go, Cancer. " +
"You've used up a lot of your reserves recently and made it to this stage just in the nick of time. " +
"Enjoy your new strength.", "This is a years planetary configurations indicate that this would be a good moment to get rid of everything that's still holding you back from an impending rebirth, Leo." +
" One stumbling block for you may be the impulse that you seem to have to blend in with others. You're an individual, Leo. " +
"This isn't something to overcome. ", "This years planetary configurations indicate that you can expect a very profitable period coming up, Virgo. " +
"You've worked hard lately, and it's only natural that you should finally arrive at this stage. " +
"You're going to be able to measure the distance you've come, and above all, evaluate your power.", "This years aspects ask you to make more of an effort, Libra." +
" You will have to come back down to Earth and join the rest of us mere mortals." +
" You may be cultivating your independence a bit too much. It pulls you away from people. " +
"You should try to mingle and get involved in a cause that's bigger than you.", "You can interpret this years aspects in several ways, Scorpio. " +
"The planetary configurations correspond to a search for space, whether physical or intellectual." +
" You may be asking yourself philosophical questions, or perhaps you're thinking of taking a long trip.", " In navigating the seas of your emotional life, Sagittarius, you may feel as though you've made a great effort over the past year. " +
"You've been available and conciliatory and have done your best to maintain harmony. " +
"With today's celestial energy, you want to be more spontaneous. " +
"The enterprising and reckless you has returned!", "With this years celestial configuration, your emotional universe will once again glow with positive energy." +
" You will be meeting more people, and your encounters are likely to be more profound. " +
"The coming weeks are quite promising for you, Capricorn. "];

var images = ["images/aquarius.jpg", "images/pices.jpg" , "images/aries.jpg" , "images/taurus.jpg" , "images/gemini.jpg",
    "images/cancer.jpg" , "images/leo.jpg" , "images/virgo.jpg" , "images/libra.jpg" , "images/scorpio.jpg"
, "images/sagittarius.jpg" , "images/capricorn.jpg"]

 function horoscope(){
     var name = document.getElementById("name").value;
     var birthday = document.getElementById("birthDay").value;
     var birthmonth = document.getElementById("birthMonth").value;
     var year = document.getElementById("year").value;
     var horoscopeSign = pickSign(birthmonth, birthday);
     var bDay = determineBday(birthmonth, birthday);
     var ZeroName = noName(name);
     var ZeroDate = noDate(birthMonth, birthDay);
     if(ZeroDate == false){
         //warn
         return false;
     }
     if(ZeroName == false){
         //warn
         return false;
     }

     document.getElementById("signs").innerHTML = "Hi "+ bDay + name +", your sign is "+ signs[horoscopeSign] +". " + messages[horoscopeSign]
     document.getElementById("image").src = images[horoscopeSign];

 }
function noName(name){
    if(!name){
        alert("Please Enter Your Name");
        return false;
    }
    return true;
}
function determineBday(month, day){
    var isBirthday = "";
    var now = new Date();
    if(now.getMonth() + 1 == month && now.getDate() == day){
        isBirthday = "Happy Birthday!"
    }
    return isBirthday;
}

function noDate(month, day){
    if(month == 2 && day > 28){
        alert("Invalid Date");
        return false;
    }
    if(month == 4 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 6 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 9 && day > 30){
        alert("Invalid Date");
        return false;
    }
    if(month == 11 && day > 30){
        alert("Invalid Date");
        return false;
    }
}

 function pickSign(month, day) {
     if(month == 1 && day >= 20 || month == 2 && day <= 19){
         return 0;
     }
     if(month == 2 && day >= 20 || month == 3 && day <= 20){
         return 1;
     }
     if(month == 3 && day >= 21 || month == 4 && day <= 20){
         return 2;
     }
     if(month == 4 &&  day >= 21 || month == 5 && day <= 20){
         return 3;
     }
     if(month == 5 && day >= 21 || month == 6 && day <= 20){
         return 4;
     }
     if(month == 6 && day >= 21 || month == 7 && day <= 22){
         return 5;
     }
     if(month == 7 && day >= 23 || month == 8 && day <= 22){
         return 6;
     }
     if(month == 8 && day >= 23 || month == 9 && day <= 23){
         return 7;
     }
     if(month == 9 && day >= 24 || month == 10 && day <= 23){
         return 8;
     }
     if(month == 10 && day >= 24 || month == 11 && day <=22){
         return 9;
     }
     if(month == 11 && day >= 23 || month == 12 && day <= 21){
         return 10;
     }
     if(month == 12 && day >= 22 || month == 1 && day <= 19){
         return 11;
     }
 }



