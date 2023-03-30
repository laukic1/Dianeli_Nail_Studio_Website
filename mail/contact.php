<?php
if(empty($_POST['name']) || empty($_POST['subject']) || empty($_POST['number']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$number = strip_tags(htmlspecialchars($_POST['number']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));

$to = "dlauko96@gmail.com"; // Change this email to your //
$subject = "$m_subject:  $name";
$body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\n\nEmail: $email\n\nNumber: $number\n\nSubject: $m_subject";
$header = "From: $email";
$header .= "Reply-To: $email";	

if(!mail($to, $subject, $body, $header))
  http_response_code(500);
?>
