<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl"
>
    <xsl:output method="xml" indent="yes"/>

    <xsl:template match="@* | node()">
        <xsl:copy>
            <xsl:apply-templates select="@* | node()"/>
        </xsl:copy>
    </xsl:template>
</xsl:stylesheet>
<!--
<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<html>
			<title>Scribus Online Manual</title>
			<style type="text/css">
				h2,h3,h4 { text-indent: 50px;}
				ul { margin-left: 100px;}
			</style>
			<table border="0" cellspacing="0" cellpadding="0" width="100%"
			bgcolor="#183867" >
				<tr>
					<td align="left">
						<img src="https://opensource.com/images/docheader1.png" width="222"
height="87"/>
					</td>
					<td align="right">
						<img src="https://opensource.com/images/docheader2.png" width="318"
height="87"/>
					</td>
				</tr>
			</table>

			<body bgcolor="#ffffff">

				<xsl:for-each select="menu">
					<xsl:for-each select="area">
						<h3>
							<a href="https://opensource.com/%7B%40file%7D" >
								<xsl:value-of select = "@text" />
							</a>
						</h3>
						<xsl:for-each select="submenuitem">
							<h4>
								<a href="https://opensource.com/%7B%40file%7D" >
									<xsl:value-of select = "@text" />
								</a>
							</h4>
							<xsl:for-each select="submenuitem">
								<p>
									<ul>
										<li>
											<a href="https://opensource.com/%7B%40file%7D" >
												<xsl:value-of select = "@text" />
											</a>
										</li>
									</ul>
								</p>
							</xsl:for-each>
						</xsl:for-each>
						<xsl:for-each select="area">
							<h3>
								<a href="https://opensource.com/%7B%40file%7D" >
									<xsl:value-of select = "@text" />
								</a>
							</h3>
						</xsl:for-each>
					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
-->