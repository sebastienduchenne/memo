<map version="freeplane 1.7.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="Ops" FOLDED="false" ID="ID_1669151699" CREATED="1605731925926" MODIFIED="1605731931073" STYLE="oval">
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
<hook NAME="AutomaticEdgeColor" COUNTER="4" RULE="ON_BRANCH_CREATION"/>
<node TEXT="R&#xe9;seau" POSITION="right" ID="ID_1141301622" CREATED="1604611802433" MODIFIED="1605731938386" HGAP_QUANTITY="49.249998949468164 pt" VSHIFT_QUANTITY="-12.749999620020402 pt">
<edge COLOR="#ff0000"/>
<node TEXT="Firewall" ID="ID_1251278959" CREATED="1604611234174" MODIFIED="1604611237926"/>
<node TEXT="VPN" ID="ID_1530048081" CREATED="1604611230097" MODIFIED="1604611232696"/>
<node TEXT="Wireshark" ID="ID_1666838157" CREATED="1605731277828" MODIFIED="1605731284664"/>
<node TEXT="serveur" ID="ID_581188726" CREATED="1604610119783" MODIFIED="1604611918006">
<node TEXT="NGINX" ID="ID_1972167417" CREATED="1604610124011" MODIFIED="1604610128270"/>
<node TEXT="Apache" ID="ID_328047332" CREATED="1604610128728" MODIFIED="1604610131886"/>
<node TEXT="Tomcat" ID="ID_1044277475" CREATED="1604610132928" MODIFIED="1604610136287"/>
<node TEXT="Glassfish" ID="ID_1238678142" CREATED="1605734376465" MODIFIED="1605734380109"/>
</node>
</node>
<node TEXT="IaC" POSITION="right" ID="ID_370047187" CREATED="1605734355612" MODIFIED="1605734362004">
<edge COLOR="#00ff00"/>
<node TEXT="Terraform" ID="ID_1993083456" CREATED="1605734363278" MODIFIED="1605734367063"/>
</node>
<node TEXT="Conteneur" POSITION="left" ID="ID_71196462" CREATED="1604608121440" MODIFIED="1605731942993" HGAP_QUANTITY="55.24999877065423 pt" VSHIFT_QUANTITY="17.99999946355821 pt">
<edge COLOR="#0000ff"/>
<node TEXT="Docker" ID="ID_674081103" CREATED="1604608125462" MODIFIED="1604608128845"/>
<node TEXT="Docker Swarm" ID="ID_152982313" CREATED="1604608405976" MODIFIED="1604608411587"/>
<node TEXT="Kubernetes" ID="ID_1771398999" CREATED="1604608129619" MODIFIED="1604609000769"/>
</node>
</node>
</map>
