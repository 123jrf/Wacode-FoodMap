# Hey, how did you find this?
# This is just a way to update all the pages at once because I'm lazy
# © 2021 Jesse Forgione

import bs4, glob, re

increment_version = 0

REPLACE = {}

REPLACE["(c)"] = "©"

print(REPLACE)

def symbols(b):
    for j in REPLACE:
        if j in b:
            b = b.replace(j, REPLACE[j])

    return b

def change_section(endpoints, new, data):
    old = re.findall(endpoints[0] + '[^|]*' + endpoints[1], data)[0]
    data = data.replace(old, new)

    return data

head = """<!--Header -->
		<div id="header" class=head>
			<a href="/index.html"><h1>Food Map</h1></a>
			<nav>
				<a class="nav" href="index.html">Discover</a>
                                <a class="nav" href="quiz.html">Quiz</a>
				<a class="nav" href="involve.html">Get Involved</a>
			</nav>
		</div>
		<!--Endhead -->"""

foot = """<!--Footer -->
        <div id="div-spacer"></div>
        <div id="footer" class=foot>
		<div class=footleft>
		<p>© 2022</p>
		<p>Site still under construction. Hopefully it'll look better someday!</p>
		</div>
		
		<div class=footright>
		<a href="https://www.youtube.com/channel/UC-F_n__X8z4nEo_JqIRbOZA" target="_blank"><img src="/resources/18-youtube.svg" style="width: 60px; height: auto;"></img></a>
		</div>
		<div class=footright>
		<a href="https://twitter.com/pianoyampy" target="_blank"><img src="/resources/twitter-1.svg" style="width: 60px; height: auto;"><img></a>
		</div>
		</div>
		<!--Endfoot -->"""

meta = """<!-- Header metadata stuffs -->
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- End header metadata stuffs -->"""

for i in glob.glob("**", recursive=True):
    if '.html' in i and '.bak' not in i and i[0] != '_':
        print(i)
        with open(i, 'r') as f:
            data = f.read()

        # Update stylesheet version
        old = re.findall('<link .*? rel="stylesheet"/>', data)[0]
        style = '<link rel="stylesheet" href="styles.css?version={S}" />'.replace(
            "{S}", str(increment_version))
        data = data.replace(old, style)

        # Update stuff
        for u in [('<!--Header -->', '<!--Endhead -->', head),
                  ('<!--Footer -->', '<!--Endfoot -->', foot),
                  ('<!-- Header metadata stuffs -->', '<!-- End header metadata stuffs -->', meta)]:
            data = change_section([u[0], u[1]], u[2], data)

        soup = bs4.BeautifulSoup(data, 'html.parser')

        print("writing")
        with open(i, 'wb') as f:
            f.write(soup.prettify(formatter="html").encode("utf-8"))
