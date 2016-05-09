function changeTarget(tabNum) {
	// reset selection
	for (i=0; i<4; i++) {
		document.getElementById('connector' + i).style.visibility = 'hidden';
		document.getElementById('button' + i).className =
			document.getElementById('button' + i).className.replace( /(?:^|\s)selected(?!\S)/ , '' );
	}

	// a wild textbox appears!
	document.getElementById('target').style.display = 'block';

	// make button 'selected'
	document.getElementById('button' + tabNum).className += ' selected';

	// make connector visible
	document.getElementById('connector' + tabNum).style.visibility = 'visible';

	// change content
	var target = document.getElementById('target');
	var content = document.getElementById('tab' + tabNum).innerHTML;
	target.innerHTML = content;

	return;

}

function fadeOut(elemID) {
    var elem = document.getElementById(elemID);
    var opacity = 1.0;
    var id = setInterval(frame, 6);

    function frame() {
        if (opacity == 0.0) {
            clearInterval(id);
        } else {
            opacity -= 0.05;
            elem.style.opacity = opacity;
        }
    }
    return;
}

function fadeIn(elemID) {
    var elem = document.getElementById(elemID);
    var opacity = 0.0;
    var id = setInterval(frame, 6);

    function frame() {
        if (opacity == 1.0) {
            clearInterval(id);
        } else {
            opacity += 0.05;
            elem.style.opacity = opacity;
        }
    }
    return;
}
/*
var failures = 0;
var successes = 0;

function test(pre,expected) {
	var head = document.getElementById('targetHead').innerHTML;
	if (pre != head) {
		console.log('Something went wrong! Actual targetHead is ' +
		head + ' .');
		failures++;
		return;
	} else changeTarget(expected);

	var actual = document.getElementById('targetHead').innerHTML;

	if (actual != expected) {
		console.log('Expected ' + expected + ' but produced ' + actual + ' .');
		failures++;
		return;
	} else {
		console.log('Everything appears to be working!');
		successes++;
		}
}
// Tests -----------------

test(0,1);
test(1,2);
test(2,3);
test(3,4);

console.log('There were ' + failures + ' failure(s) and ' + successes + ' success(es).');
*/
