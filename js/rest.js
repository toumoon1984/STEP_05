// スコープ化
(  ()=>  {
    const $counter = document.getElementById("js_counter");
	const $dot = document.getElementById("js_dot");
	const $record = document.getElementById("js_record");

    const clickHandler = () => {
        $counter.textContent = 0;
        $dot.textContent = "";
        $record.textContent = "";

    };

    document.getElementById("js_reset").addEventListener("click", clickHandler);


}) ();
