from selenium import webdriver
import urllib.request
import os

# set up Selenium WebDriver
driver = webdriver.Chrome()

# navigate to webpage
driver.get("https://demos.codezeel.com/prestashop/PRS19/PRS190471/en/")

# create directory to store images
if not os.path.exists("img"):
    os.mkdir("img")

# find all img tags and download them
img_tags = driver.find_elements_by_tag_name("img")
for i, img in enumerate(img_tags):
    src = img.get_attribute("src")
    if src:
        # extract filename and file extension from src attribute
        filename, extension = os.path.splitext(os.path.basename(src))
        # generate file path for image based on filename and file extension
        filepath = os.path.join("img", "{}{}".format(filename, extension))
        # check if file already exists
        if os.path.exists(filepath):
            # add differentiator to filename to avoid overwriting existing file
            j = 1
            while os.path.exists(os.path.join("img", "{}_{}{}".format(filename, j, extension))):
                j += 1
            filename = "{}_{}".format(filename, j)
        # generate file path with differentiator (if any)
        filepath = os.path.join("img", "{}{}".format(filename, extension))
        # download image and save to file
        urllib.request.urlretrieve(src, filepath)
        print("Downloaded", filepath)

# close Selenium WebDriver
driver.quit()
