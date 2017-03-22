
/**
 * 匀速动画封装
 * 
 * @param {Object} obj  调用方法的对象
 * @param {Object} target  运动到的目的地
 * @param {Object} speed  运动的速度，单位为px/ms
 */
function animateUniform(obj,target,speed){
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


/**
 * 缓动动画封装（水平方向）
 * @param {Object} obj  调用方法的对象
 * @param {Object} target  目标位置
 */
function animateSlowX(obj,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var step = (target-obj.offsetLeft)/10;
		//由于offsetLeft取值问题，步长大于0时向上取整，步长小于0时向下取整，使|步长|<1px时以1px前进
		step = step>0 ? Math.ceil(step):Math.floor(step);
		obj.style.left=obj.offsetLeft+step+"px";
		if(Math.abs(target-obj.offsetLeft)<=Math.abs(step)){
			obj.style.left=target+"px";
			clearInterval(obj.timer);
		}
	},30);
}


/**
 * 缓动动画封装（垂直方向）
 * @param {Object} obj  调用方法的对象
 * @param {Object} target  目标位置
 */
function animateSlowY(obj,target){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var step = (target-obj.offsetTop)/10;
		//由于offsetLeft取值问题，步长大于0时向上取整，步长小于0时向下取整，使|步长|<1px时以1px前进
		step = step>0 ? Math.ceil(step):Math.floor(step);
		obj.style.top=obj.offsetTop+step+"px";
		if(Math.abs(target-obj.offsetTop)<=Math.abs(step)){
			obj.style.top=target+"px";
			clearInterval(obj.timer);
		}
	},30);
}


/**
 * scrollTop和scrollLeft封装
 */
function scroll() {  
    return {
        "top": window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
        "left":  window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft
    }
}

/**
 * 检测浏览器的宽高
 */
function client(){
	return {
		"width":window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		"height":window.innerHeight ||  document.documentElement.clientHeight || document.body.clientHeight
	}
}

