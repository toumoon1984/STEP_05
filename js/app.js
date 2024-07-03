
// ボタンIDの取得
// const $counter = document.getElementById("js_counter");

// const $button = document.getElementById("js_button");


// document.getElementById("js_button").addEventListener("click",() =>
//     {
//     let currentCount = parseInt($counter.textContent);
//     $counter.textContent = currentCount + 1;


//     }
// );




// スコープ化
(  ()=>  {
	// カウント表示コンテンツのIDを取得
	const $counter = document.getElementById("js_counter");
	const $dot = document.getElementById("js_dot");
	const $WaB = document.getElementById("js_WaB");


    // 「clickHandler」メソッドを定義する。
	// 引数はe（クリックイベント）

	const clickHandler = (e)   =>{
		const $targetButton = e.currentTarget;

        let currentCount = parseInt($counter.textContent);
		let currentWaB = $WaB.textContent;

        if ($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;
            $WaB.textContent = currentWaB + "○";
			$dot.textContent ="";
			console.log("+ボタン");

			if ($counter.textContent <0){
				console.log("●ゾーン");
				console.log("0> " + $counter.textContent);

				for(let dotCount = 0; dotCount > $counter.textContent; dotCount--){
					console.log(dotCount + " > " + $counter.textContent);
					$dot.textContent += "●";
					console.log("-FC " + $dot.textContent);
				}

			}else{
				
				for(let dotCount = 0; dotCount < $counter.textContent; dotCount++){
					console.log("+dC " + dotCount +"  "+$counter.textContent);
					$dot.textContent += "○";
					console.log("+FC " + $dot.textContent);
				}
			}

        }else{
			$counter.textContent = currentCount - 1;
            $WaB.textContent = currentWaB + "●";
			$dot.textContent ="";
			console.log("-ボタン");

			if ($counter.textContent <0){
				console.log("●ゾーン");
				console.log("0> " + $counter.textContent);

				for(let dotCount = 0; dotCount > $counter.textContent; dotCount--){
					console.log(dotCount + " > " + $counter.textContent);
					$dot.textContent += "●";
					console.log("-FC " + $dot.textContent);
				}

			}else{
				console.log("○ゾーン");
				
				for(let dotCount = 0; dotCount < $counter.textContent; dotCount++){
					console.log("+dC " + dotCount +"  "+$counter.textContent);
					$dot.textContent += "○";
					console.log("+FC " + $dot.textContent);
				}
			}
		}
	}

	for(let index = 0; index < document.getElementsByClassName("js_button").length; index++){	
		document.getElementsByClassName("js_button")[index].addEventListener("click", (e) => clickHandler(e))
	}

}) ();
