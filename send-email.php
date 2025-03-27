<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $admin_email = "admin@example.com";

    // Get form data
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $subject = !empty($_POST["subject"]) ? htmlspecialchars($_POST["subject"]) : "No Subject";
    $message = htmlspecialchars($_POST["message"]);

    // Email subject
    $email_subject = "SB Portfolio Contact Form Submitted: " . $subject;

    // Email content
    $email_body = "You have received a new message from your portfolio contact form.\n\n" .
                  "Name: $name\n" .
                  "Email: $email\n" .
                  "Subject: $subject\n\n" .
                  "Message:\n$message\n";

    // Email headers
    $headers = "From: Your Name <no-reply@example.com>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send email
    if (mail($admin_email, $email_subject, $email_body, $headers)) {
        header("Location: form-submitted.html");
        exit();
    } else {
        header("Location: form-failed.html");
        exit();
    }
}
?>
