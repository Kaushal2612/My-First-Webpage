<html>
<script type="text/javascript">
<!--// Form validate code will come here.

function validate()
{

	if( document.feedback.Firstname.value == "" )
	
	{
	alert( "Please provide your name!" );
	document.feedback.Firstname.focus() ;
	return false;
	}
	
	if( document..Lastname.value == "" )
	
	{
	alert( "Please provide your name!" );
	document.feedback.Lastname.focus() ;
	return false;
	}
	
	if( document.feedback.Comment.value == "" )
	
	{
	alert( "Please give ur Comment!" );
	document.feedback.Comment.focus() ;
	return false;
	}
	
	
	return( true );
}

//-->
</script>
</html>