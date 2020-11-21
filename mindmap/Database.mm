<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="database" FOLDED="false" ID="ID_1141197961" CREATED="1605566388389" MODIFIED="1605566394443" STYLE="oval">
<font SIZE="18"/>
<hook NAME="MapStyle">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" fit_to_viewport="false"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24.0 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ICON_SIZE="12.0 pt" COLOR="#000000" STYLE="fork">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10.0 pt" SHAPE_VERTICAL_MARGIN="10.0 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="8" RULE="ON_BRANCH_CREATION"/>
<node TEXT="NoSQL" POSITION="right" ID="ID_1123116820" CREATED="1604608023999" MODIFIED="1605731896987">
<edge COLOR="#00ff00"/>
<node TEXT="cl&#xe9;-valeur" ID="ID_1747404439" CREATED="1605735083658" MODIFIED="1605735086794">
<node TEXT="Redis" ID="ID_1745211175" CREATED="1604608268806" MODIFIED="1604608270762"/>
</node>
<node TEXT="Cassandra" ID="ID_398768094" CREATED="1604608519978" MODIFIED="1604608528167"/>
<node TEXT="DynamoDB" ID="ID_1090353451" CREATED="1605047799882" MODIFIED="1605047803046"/>
<node TEXT="orient&#xe9; document" ID="ID_1753785285" CREATED="1605733708979" MODIFIED="1605733714460">
<node TEXT="CouchDB" ID="ID_1697390976" CREATED="1605047796249" MODIFIED="1605047799451"/>
<node TEXT="MongoDB" ID="ID_1674115280" CREATED="1604608265566" MODIFIED="1604608268449"/>
</node>
<node TEXT="orient&#xe9; graphe" ID="ID_1566095171" CREATED="1605733755978" MODIFIED="1605733761500">
<node TEXT="Neo4J" ID="ID_165822628" CREATED="1605733763155" MODIFIED="1605733769313"/>
</node>
<node TEXT="orient&#xe9; colonne" ID="ID_1577718335" CREATED="1605733447154" MODIFIED="1605989771571">
<node TEXT="BigTable" ID="ID_1527893596" CREATED="1605733417402" MODIFIED="1605733421125"/>
<node TEXT="HBase" ID="ID_590767620" CREATED="1605733421909" MODIFIED="1605733425182"/>
<node TEXT="Cassandra" ID="ID_1007446181" CREATED="1605733564635" MODIFIED="1605733570187"/>
<node TEXT="HyperTable" ID="ID_815898109" CREATED="1605733575016" MODIFIED="1605733579150"/>
</node>
</node>
<node TEXT="relationnelle" POSITION="right" ID="ID_1504278062" CREATED="1604608019235" MODIFIED="1605731894025">
<edge COLOR="#ff0000"/>
<node TEXT="MySQL" ID="ID_1033811195" CREATED="1604608508921" MODIFIED="1604608512156"/>
<node TEXT="PostgreSQL" ID="ID_561558737" CREATED="1604608757542" MODIFIED="1604608763470"/>
<node TEXT="MariaDB" ID="ID_1127589236" CREATED="1604608886348" MODIFIED="1604611446756"/>
<node TEXT="Oracle DB" ID="ID_825954132" CREATED="1605047878836" MODIFIED="1605735193273"/>
<node TEXT="SQLite : BD embarqu&#xe9;e" ID="ID_1368623428" CREATED="1605989744336" MODIFIED="1605990767266"/>
<node TEXT="SQL Server" ID="ID_241675818" CREATED="1605990228952" MODIFIED="1605990232431"/>
</node>
<node TEXT="Data Monitoring" POSITION="left" ID="ID_1775584589" CREATED="1604608213411" MODIFIED="1605731898745" HGAP_QUANTITY="11.750000067055211 pt" VSHIFT_QUANTITY="-29.999999105930353 pt">
<edge COLOR="#ff00ff"/>
<node TEXT="Elasticsearch - Logstash - Kibana" ID="ID_1551203575" CREATED="1604608220484" MODIFIED="1604611372201"/>
<node TEXT="Telegraf - InfluxDB - Grafana" ID="ID_245693860" CREATED="1604608237310" MODIFIED="1604608251256"/>
<node TEXT="Prometheus" ID="ID_370084790" CREATED="1604608291092" MODIFIED="1604608296900"/>
</node>
<node TEXT="Time series DB" POSITION="left" ID="ID_161433386" CREATED="1604608187908" MODIFIED="1605991070567">
<edge COLOR="#0000ff"/>
<node TEXT="InfluxDB" ID="ID_761015117" CREATED="1604608257201" MODIFIED="1604608262980"/>
</node>
<node TEXT="propri&#xe9;t&#xe9;s ACID" POSITION="left" ID="ID_889179088" CREATED="1605989580314" MODIFIED="1605989633025">
<edge COLOR="#00007c"/>
</node>
</node>
</map>
