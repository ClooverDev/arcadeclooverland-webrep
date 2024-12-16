function update_progress_bar() {
	const inner_bar = "#bar_inner";
	const bar_title = document.getElementById("bar_title");
	
	const CURRENT_PROGRESS_INT = 0;
	const CURRENT_PROGRESS_TITLE = "SUPER PLATFORM: R | CHRISTMAS & PART 2";
	
	$(inner_bar).width(CURRENT_PROGRESS_INT+"%");
	bar_title.innerHTML = CURRENT_PROGRESS_TITLE+" <br><span style='color:white; font-size: 32px;'>["+CURRENT_PROGRESS_INT+"%]</span>";
}
