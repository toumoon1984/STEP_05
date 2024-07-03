// スコープ化
(  ()=>  {
    const $counter = document.getElementById("js_counter");
	const $dot = document.getElementById("js_dot");
	const $WaB = document.getElementById("js_WaB");

    const clickHandler = () => {
        $counter.textContent = 0;
        $dot.textContent = "";
        $WaB.textContent = "";

    };

    document.getElementById("js_reset").addEventListener("click", clickHandler);


}) ();
