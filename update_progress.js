// PROGRESS BAR //
const progress_current = 75;
const current_part_being_produced = "SUPER PLATFORM: REORIGINAL - BASE GAME";

function update_progress_bar() {
const perc = document.getElementById("pb_percentage");
const bar = document.getElementById("pb_bar");

bar.style.width = progress_current+"%";
perc.innerHTML = progress_current+"%" + " - " + current_part_being_produced;
}

update_progress_bar();
