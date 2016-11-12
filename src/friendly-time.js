export default function ( timeObject, unitStr ) {//时间差计算函数 人性化显示结果
    var time = new Date( timeObject );
    var result = "";
    var now = new Date();
    var diff = now.getTime() - time.getTime();
    var days = diff/24/60/60/1000;
    var daysInt = parseInt( days )
    var delta = days - daysInt;

    var diffObject = [
        { value: daysInt / 365, unit: unitStr.year || "年" },//year
        { value: daysInt / 30, unit: unitStr.month || "个月"  },//month
        { value: daysInt / 7, unit: unitStr.week   || "周"  },//week
        { value: diff /60/60/1000, unit: unitStr.hour || "小时"  },//hour
        { value: diff/60/1000, unit: unitStr.minute   || "分钟"  },//minute
        { value: diff / 1000, unit: unitStr.second    || "秒"  }//second
    ];


    for (var i = 0; i < diffObject.length ; i++) {

        if ( diffObject[i].value >= 1 ) {
            result = parseInt(diffObject[i].value) + diffObject[i].unit;
            return result;
        } 
    }
    return diffObject[5].value + diffObject[5].unit;
}