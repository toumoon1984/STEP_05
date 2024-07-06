
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

	// ○●表示コンテンツのIDを取得
	const $dot = document.getElementById("js_dot");

	// ○●履歴表示コンテンツのIDを取得
	const $record = document.getElementById("js_record");


    // 「clickHandler」メソッドを定義する。
	// 引数はe（クリックイベント）

	const clickHandler = (e)   =>{
		// クリックしたボタンのIDを取得
		const $targetButton = e.currentTarget;

		// クリックした時のカウンターの表示値を取得
        let currentCount = parseInt($counter.textContent);

		// クリックした時の○●履歴の状態を取得
		let currentRecord = $record.textContent;



		// クリックしたボタンのテキストが＋だったら
        if ($targetButton.textContent === "+"){
            $counter.textContent = currentCount + 1;		// 現状カウンターの値に+1して、カウンターの表示値に代入
            $record.textContent = currentRecord + "○";		// ○●履歴テキストに、○を追加して差し替える。
			$dot.textContent ="";							// ○●現状表示のテキストをリセット
			console.log("+ボタン押下フラグ");

			if ($counter.textContent <0){
				console.log("押下後カウンター値<0フラグ");

				// 押下後のカウンター値の個数分、●表示
				for(let dotCount = 0; dotCount > $counter.textContent; dotCount--){
					$dot.textContent += "●";
					console.log("for回転履歴　" + $dot.textContent);
				}

			}else{
				console.log("押下後カウンター値>0フラグ");

				// 押下後のカウンター値の個数分、○表示
				for(let dotCount = 0; dotCount < $counter.textContent; dotCount++){
					$dot.textContent += "○";
					console.log("for回転履歴　" + $dot.textContent);
				}
			}

		// クリックしたボタンのテキストが-だったら
        }else{
			$counter.textContent = currentCount - 1;		// 現状カウンターの値に-1して、カウンターの表示値に代入
            $record.textContent = currentRecord + "●";		// ○●履歴テキストに、●を追加して差し替える。
			$dot.textContent ="";							// ○●現状表示のテキストをリセット
			console.log("-ボタン押下フラグ");

			if ($counter.textContent <0){
				console.log("押下後カウンター値<0フラグ");

				// 押下後のカウンター値の個数分、●表示
				for(let dotCount = 0; dotCount > $counter.textContent; dotCount--){
					$dot.textContent += "●";
					console.log("for回転履歴　" + $dot.textContent);
				}

			}else{
				console.log("押下後カウンター値>0フラグ");

				// 押下後のカウンター値の個数分、○表示
				for(let dotCount = 0; dotCount < $counter.textContent; dotCount++){
					$dot.textContent += "○";
					console.log("for回転履歴　" + $dot.textContent);
				}
			}
		}
	}

	for(let index = 0; index < document.getElementsByClassName("js_button").length; index++){	
		document.getElementsByClassName("js_button")[index].addEventListener("click", (e) => clickHandler(e))
	}

}) ();
