/**
 * scrollTop和scrollLeft封装
 */
function scroll() {  // 
    if(window.pageYOffset != null) {  // ie9+ 高版本浏览器
        // 因为 window.pageYOffset 默认的是  0  所以这里需要判断
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode === "CSS1Compat") {    // 标准浏览器   来判断有没有声明DTD
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return {   // 未声明 DTD
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

/**
 * 
 * @param {Object} obj  调用方法的对象
 * @param {Object} target  运动到的目的地
 * @param {Object} speed  运动的速度，单位为px/ms
 */
function animate_uniform(obj,target,speed){
	//要用定时器，先清定时器
	clearInterval(obj.timer);
	
	//根据当前位置和目标位置判断步长的正负
	var step = target > obj.offsetLeft ? speed : -speed;
	
	//设置定时器
	obj.timer = setInterval(function(){
		var distance = target - obj.offsetLeft;
		obj.style.left = obj.offsetLeft+step+"px";
		//当当前位置与目标位置之间的距离小于步长时，直接到达目标位置，同时清除定时器
		if(Math.abs(distance)<Math.abs(step)){
			obj.style.left = target +"px";
			clearInterval(obj.timer);
		}
	},1);
}


