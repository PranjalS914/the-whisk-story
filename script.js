
function orderNow(cakeName) {
    const phoneNumber = "919876543210"; // Demo number: replace with a business WhatsApp number

    const message = `Hi! I would like to order the ${cakeName}. Please share more details.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
}

