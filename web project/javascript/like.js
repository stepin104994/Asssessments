var count=localStorage.getItem('counts');
	if(!count){
		count=0;
	}
	function like()
	{
		localStorage.setItem('counts',++count);
		document.getElementById('likeCount').innerHTML=count;

	}