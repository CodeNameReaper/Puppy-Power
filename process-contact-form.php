<!-- This is for contact form submit, will not work now as we need to host it somewhere. Can change where email sent. -->

<?php
// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create the email message
$to = 'ENETER_YOUR_EMAIL@arizona.com';
$subject = 'Contact Form Submission';
$body = "Name: $name\nEmail: $email\nMessage:\n$message";

// Send the email
if (mail($to, $subject, $body)) {
  echo 'Your message has been sent.';
} else {
  echo 'An error occurred while sending the message.';
}
?>

