function cal() {
    let today = new Date();

    let start_date = parseInt(document.getElementById("start_date").value);
    let start_month = parseInt(document.getElementById("start_month").value);
    let start_year = parseInt(document.getElementById("start_year").value);
    console.log(start_date, start_month, start_year);

    let end_date = parseInt(document.getElementById("end_date").value);
    let end_month = parseInt(document.getElementById("end_month").value);
    let end_year = parseInt(document.getElementById("end_year").value);
    console.log(end_date, end_month, end_year);

    let one_day = 1000 * 60 * 60 * 24;
    let one_week = 1000 * 60 * 60 * 24 * 7;
    let one_month = 1000 * 60 * 60 * 24 * 7 * 4.345;
    let one_year = 1000 * 60 * 60 * 24 * 7 * 4.345 * 12;
    let start = new Date(today.setFullYear(start_year, start_month, start_date));
    let end = new Date(today.setFullYear(end_year, end_month, end_date));

    // console.log(start.getFullYear());
    let result_days, result_weeks, result_months, result_years;

    result_days = parseInt((end.getTime() - start.getTime()) / one_day);
    result_weeks = parseInt((end.getTime() - start.getTime()) / one_week);
    result_months = parseInt((end.getTime() - start.getTime()) / one_month);
    result_years = parseInt((end.getTime() - start.getTime()) / one_year);


    console.log(result_days + " days.");
    console.log(result_weeks + " weeks.");
    console.log(result_months + " months.");
    console.log(result_years + " years.");

    let show_result = document.getElementById("show_result");
    show_result.innerHTML = result_days + " days " + result_weeks + " weeks " + result_months + " months " + result_years + " years";

};