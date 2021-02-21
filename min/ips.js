var input_red='input-warn';var input_green='input-ok';var input_ok_box='input-ok-content';var input_warn_box='input-warn-content';var img_blank='blank.gif';var img_tick='aff_tick.gif';var img_cross='aff_cross.gif';var uagent=navigator.userAgent.toLowerCase();var is_safari=((uagent.indexOf('safari')!=-1)||(navigator.vendor=="Apple Computer, Inc."));var is_opera=(uagent.indexOf('opera')!=-1);var is_webtv=(uagent.indexOf('webtv')!=-1);var is_ie=((uagent.indexOf('msie')!=-1)&&(!is_opera)&&(!is_safari)&&(!is_webtv));var is_ie4=((is_ie)&&(uagent.indexOf("msie 4.")!=-1));var is_moz=((navigator.product=='Gecko')&&(!is_opera)&&(!is_webtv)&&(!is_safari));var is_ns=((uagent.indexOf('compatible')==-1)&&(uagent.indexOf('mozilla')!=-1)&&(!is_opera)&&(!is_webtv)&&(!is_safari));var is_ns4=((is_ns)&&(parseInt(navigator.appVersion)==4));var is_kon=(uagent.indexOf('konqueror')!=-1);var is_win=((uagent.indexOf("win")!=-1)||(uagent.indexOf("16bit")!=-1));var is_mac=((uagent.indexOf("mac")!=-1)||(navigator.vendor=="Apple Computer, Inc."));var ua_vers=parseInt(navigator.appVersion);var ipb_pages_shown=0;var ipb_pages_array=new Array();function global_dst_check(tzo,dst)
{var thisoffset=tzo+dst;var dstoffset=new Date().getTimezoneOffset()/60;var dstset=0;var url=ipb_var_base_url+'act=xmlout&do=dst-autocorrection&md5check='+ipb_md5_check;if(Math.abs(thisoffset+dstoffset)==1)
{try
{xml_dst_set(url+'&xml=1');dstset=1;}
catch(e)
{dstset=0;}
if(dstset==0)
{window.location=url;}}}
function my_getcookie(name)
{cname=ipb_var_cookieid+name+'=';cpos=document.cookie.indexOf(cname);if(cpos!=-1)
{cstart=cpos+cname.length;cend=document.cookie.indexOf(";",cstart);if(cend==-1)
{cend=document.cookie.length;}
return unescape(document.cookie.substring(cstart,cend));}
return null;}
function my_setcookie(name,value,sticky)
{expire="";domain="";path="/";if(sticky)
{expire="; expires=Wed, 1 Jan 2020 00:00:00 GMT";}
if(ipb_var_cookie_domain!="")
{domain='; domain='+ipb_var_cookie_domain;}
if(ipb_var_cookie_path!="")
{path=ipb_var_cookie_path;}
document.cookie=ipb_var_cookieid+name+"="+value+"; path="+path+expire+domain+';';}
function lang_build_string()
{if(!arguments.length||!arguments)
{return;}
var string=arguments[0];for(var i=1;i<arguments.length;i++)
{var match=new RegExp('<%'+i+'>','gi');string=string.replace(match,arguments[i]);}
return string;}
function buddy_pop()
{window.open(ipb_var_base_url+'act=buddy','BrowserBuddy','width=250,height=500,resizable=yes,scrollbars=yes');}
function do_multi_page_jump(pages_id)
{var pages=1;var cur_st=ipb_var_st;var cur_page=1;var total_posts=ipb_pages_array[pages_id][2];var per_page=ipb_pages_array[pages_id][1];var url_bit=ipb_pages_array[pages_id][0];var userPage=parseInt(document.getElementById('st-'+pages_id).value);url_bit=url_bit.replace(new RegExp("&amp;","g"),'&');if(total_posts%per_page==0)
{pages=total_posts/per_page;}
else
{pages=Math.ceil(total_posts/per_page);}
if(cur_st>0)
{cur_page=cur_st/per_page;cur_page=cur_page-1;}
if(userPage>0)
{if(userPage<1){userPage=1;}
if(userPage>pages){userPage=pages;}
if(userPage==1){start=0;}
else{start=(userPage-1)*per_page;}
window.location=url_bit+"&st="+start;return false;}}
function pages_st_focus(pages_id)
{document.getElementById('st-'+pages_id).focus();}
function ShowHide(id1,id2)
{if(id1!='')toggleview(id1);if(id2!='')toggleview(id2);}
function my_getbyid(id)
{itm=null;if(document.getElementById)
{itm=document.getElementById(id);}
else if(document.all)
{itm=document.all[id];}
else if(document.layers)
{itm=document.layers[id];}
return itm;}
function toggleview(id)
{if(!id)return;if(itm=my_getbyid(id))
{if(itm.style.display=="none")
{my_show_div(itm);}
else
{my_hide_div(itm);}}}
function my_hide_div(itm)
{if(!itm)return;itm.style.display="none";}
function my_show_div(itm)
{if(!itm)return;itm.style.display="";}
function change_cell_color(id,cl)
{itm=my_getbyid(id);if(itm)
{itm.className=cl;}}
function togglecategory(fid,add)
{saved=new Array();clean=new Array();if(tmp=my_getcookie('collapseprefs'))
{saved=tmp.split(",");}
for(i=0;i<saved.length;i++)
{if(saved[i]!=fid&&saved[i]!="")
{clean[clean.length]=saved[i];}}
if(add)
{clean[clean.length]=fid;my_show_div(my_getbyid('fc_'+fid));my_hide_div(my_getbyid('fo_'+fid));}
else
{my_show_div(my_getbyid('fo_'+fid));my_hide_div(my_getbyid('fc_'+fid));}
my_setcookie('collapseprefs',clean.join(','),1);}
function locationjump(url)
{window.location=ipb_var_base_url+url;}
function chooseskin(obj)
{choosebox=obj.options[obj.selectedIndex].value;extravars='';if(choosebox!=-1&&!isNaN(choosebox))
{if(document.skinselectorbox.skinurlbits.value)
{extravars='&'+document.skinselectorbox.skinurlbits.value;extravars=extravars.replace(/setskin=\d{1,}/g,'');extravars=extravars.replace(/skinid=\d{1,}/g,'');extravars=extravars.replace(/&{1,}/g,'&');extravars=extravars.replace(/s=&/g,'');}
locationjump('setskin=1&skinid='+choosebox+extravars);}}
function chooselang(obj)
{choosebox=obj.options[obj.selectedIndex].value;extravars='';if(document.langselectorbox.langurlbits.value)
{extravars='&'+document.langselectorbox.langurlbits.value;extravars=extravars.replace(/setlanguage=\d{1,}/g,'');extravars=extravars.replace(/cal_id=&/g,'');extravars=extravars.replace(/langid=\w{1,}/g,'');extravars=extravars.replace(/&{1,}/g,'&');extravars=extravars.replace(/s=&/g,'');}
locationjump('setlanguage=1&langid='+choosebox+extravars);}
function PopUp(url,name,width,height,center,resize,scroll,posleft,postop)
{showx="";showy="";if(posleft!=0){X=posleft}
if(postop!=0){Y=postop}
if(!scroll){scroll=1}
if(!resize){resize=1}
if((parseInt(navigator.appVersion)>=4)&&(center))
{X=(screen.width-width)/2;Y=(screen.height-height)/2;}
if(X>0)
{showx=',left='+X;}
if(Y>0)
{showy=',top='+Y;}
if(scroll!=0){scroll=1}
var Win=window.open(url,name,'width='+width+',height='+height+showx+showy+',resizable='+resize+',scrollbars='+scroll+',location=no,directories=no,status=no,menubar=no,toolbar=no');}
function stacksize(thearray)
{for(i=0;i<thearray.length;i++)
{if((thearray[i]=="")||(thearray[i]==null)||(thearray=='undefined'))
{return i;}}
return thearray.length;}
function pushstack(thearray,newval)
{arraysize=stacksize(thearray);thearray[arraysize]=newval;}
function popstack(thearray)
{arraysize=stacksize(thearray);theval=thearray[arraysize-1];delete thearray[arraysize-1];return theval;}
function innerhtml_template_to_html(t)
{t=t.replace(/&lt;%(\d+?)&gt;/ig,"<%$1>");t=t.replace(/%3C%(\d+?)%3E/ig,"<%$1>");return t;}
function global_cancel_bubble(obj,extra)
{if(!obj||is_ie)
{if(extra)
{window.event.returnValue=false;}
window.event.cancelBubble=true;return window.event;}
else
{obj.stopPropagation();if(extra)
{obj.preventDefault();}
return obj;}}
function _get_obj_leftpos(obj)
{var left=obj.offsetLeft;while((obj=obj.offsetParent)!=null)
{left+=obj.offsetLeft;}
return left;}
function _get_obj_toppos(obj)
{var top=obj.offsetTop;while((obj=obj.offsetParent)!=null)
{top+=obj.offsetTop;}
return top;}
function center_div()
{this.divname='';this.divobj='';}
center_div.prototype.move_div=function()
{try
{this.divobj=document.getElementById(this.divname);}
catch(e)
{return;}
var my_width=0;var my_height=0;if(typeof(window.innerWidth)=='number')
{my_width=window.innerWidth;my_height=window.innerHeight;}
else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight))
{my_width=document.documentElement.clientWidth;my_height=document.documentElement.clientHeight;}
else if(document.body&&(document.body.clientWidth||document.body.clientHeight))
{my_width=document.body.clientWidth;my_height=document.body.clientHeight;}
this.divobj.style.position='absolute';this.divobj.style.display='block';this.divobj.style.zIndex=99;var divheight=parseInt(this.divobj.style.Height);var divwidth=parseInt(this.divobj.style.Width);divheight=divheight?divheight:200;divwidth=divwidth?divwidth:400;var scrolly=this.getYscroll();var setX=(my_width-divwidth)/2;var setY=(my_height-divheight)/2+scrolly;setX=(setX<0)?0:setX;setY=(setY<0)?0:setY;this.divobj.style.left=setX+"px";this.divobj.style.top=setY+"px";}
center_div.prototype.hide_div=function()
{try
{if(!this.divobj)
{return;}
else
{this.divobj.style.display='none';}}
catch(e)
{return;}}
center_div.prototype.getYscroll=function()
{var scrollY=0;if(document.documentElement&&document.documentElement.scrollTop)
{scrollY=document.documentElement.scrollTop;}
else if(document.body&&document.body.scrollTop)
{scrollY=document.body.scrollTop;}
else if(window.pageYOffset)
{scrollY=window.pageYOffset;}
else if(window.scrollY)
{scrollY=window.scrollY;}
return scrollY;};var menu_registered=new Array();var menu_openfuncs=new Array();var menu_built=new Array();var menu_open_menus=new Array();var menu_cur_open=false;function menu_do_global_init()
{if(menu_registered.length>0)
{for(var i in menu_registered)
{menu_init(menu_registered[i]);}
document.onclick=menu_action_close;}}
function menu_init(cid)
{var mid=_menu_get_base_name(cid)+"_menu";var mobj=my_getbyid(mid);if(document.getElementsByTagName&&mobj)
{var cobj=my_getbyid(cid);try
{cobj.style.cursor="pointer";}
catch(e)
{cobj.style.cursor="hand";}
cobj.unselectable=true;cobj.onclick=_event_menu_click;cobj.onmouseover=_event_menu_mouseover;if(typeof(menu_built[mid])!="undefined")
{return;}
var pobj=my_getbyid(mid);pobj.style.display="none";pobj.style.position="absolute";pobj.style.left="0px";pobj.style.top="0px";pobj.onclick=_cancel_bubble;pobj.zIndex=1000;menu_built[mid]=true;}}
function menu_register(cid,callback)
{if(document.getElementsByTagName)
{var cobj=my_getbyid(cid);if(cobj)
{menu_registered[menu_registered.length]=cid;if(callback)
{menu_openfuncs[cobj]=callback;}
return true;}}
return false;}
function menu_action_open(e)
{var openmenu=menu_cur_open;var negpad=true;menu_action_close();if(openmenu==e.id)
{return false;}
var mid=_menu_get_base_name(e.id)+"_menu";var mobj=my_getbyid(mid);var left_px=_get_obj_leftpos(e);var top_px=_get_obj_toppos(e)+e.offsetHeight;var callbackobj=my_getbyid(e.id);var ifid=e.id;menu_open_menus[e.id]=true;menu_cur_open=e.id;mobj.style.display="";var width=parseInt(mobj.style.width)?parseInt(mobj.style.width):mobj.offsetWidth;if((left_px+width)>=document.body.clientWidth)
{left_px=left_px+e.offsetWidth-width;negpad=false;}
if(is_ie)
{left_px+=(negpad)?-2:2;}
if(e.id==="navtip")
{navTipShowTweak();}
else
{mobj.style.left=left_px+"px";mobj.style.top=top_px+"px";mobj.style.zIndex=100;}
if(menu_openfuncs[callbackobj])
{eval(menu_openfuncs[callbackobj]);}
if(is_ie)
{try
{if(!document.getElementById('if_'+e.id))
{var iframeobj=document.createElement('iframe');iframeobj.src='javascript;';iframeobj.id='if_'+e.id;document.getElementsByTagName('body').appendChild(iframeobj);}
else
{var iframeobj=document.getElementById('if_'+e.id);}
iframeobj.scrolling='no';iframeobj.frameborder='no';iframeobj.className='iframeshim';iframeobj.style.position='absolute';iframeobj.style.width=parseInt(mobj.offsetWidth)+'px';iframeobj.style.height=parseInt(mobj.offsetHeight)+'px';iframeobj.style.top=mobj.style.top;iframeobj.style.left=mobj.style.left;iframeobj.style.zIndex=99;iframeobj.style.display="block";}
catch(e)
{}}
if(is_safari)
{try
{mlinks=mobj.getElementsByTagName('a');for(var i=0;i<=mlinks.length;i++)
{if(mlinks[i].href&&(mlinks[i].href.indexOf('#',0)!=(mlinks[i].href.length-1)))
{mlinks[i].id='saf-link-'+mid+i;}}}
catch(e)
{}}
return false;}
function _safari_onclick_handler()
{if(this.id)
{window.location=document.getElementById(this.id).href;}}
function menu_action_close()
{if(menu_cur_open)
{for(i in menu_open_menus)
{my_getbyid(_menu_get_base_name(i)+"_menu").style.display="none";if(is_ie)
{try
{document.getElementById('if_'+i).style.display="none";}
catch(e)
{}}
menu_open_menus[i]=false;if(_menu_get_base_name(i)==="navtip")
{navTipHideTweak();}}}
menu_cur_open=false;}
function menu_action_hover(e)
{for(i in menu_open_menus)
{if(menu_open_menus[i]==true&&i!=e.id)
{menu_action_open(e);return;}}}
function _cancel_bubble(obj,extra)
{if(!obj||is_ie)
{if(extra)
{window.event.returnValue=false;}
window.event.cancelBubble=true;return window.event;}
else
{if(obj.target.type=='submit')
{obj.target.form.submit();}
obj.stopPropagation();if(extra)
{obj.preventDefault();}
return obj;}}
function _event_menu_mouseover(e)
{e=_cancel_bubble(e,true);menu_action_hover(this);}
function _event_menu_click(e)
{e=_cancel_bubble(e,true);menu_action_open(this);}
function _menu_get_base_name(cid)
{var endpos=cid.indexOf(".");if(endpos!=-1)
{return cid.substr(0,endpos);}
else
{return cid;}}
function _get_obj_leftpos(obj)
{var left=obj.offsetLeft;while((obj=obj.offsetParent)!=null)
{left+=obj.offsetLeft;}
return left;}
function _get_obj_toppos(obj)
{var top=obj.offsetTop;while((obj=obj.offsetParent)!=null)
{top+=obj.offsetTop;}
return top;};var css_mainwrap='popupmenu';var css_menusep='popupmenu-item';var css_menusep_last='popupmenu-item-last';var img_item="<img src='"+ipb_var_image_url+"/menu_item.gif' border='0' alt='V' style='vertical-align:absmiddle; padding:0 0 1px 0' />";var img_action="<img src='"+ipb_var_image_url+"/menu_item2.gif' border='0' alt='V' />";function make_image(img)
{return"<img src='"+ipb_var_image_url+"/"+img+"' border='0' alt='-' class='ipd' />";}
function menu_build_menu(cid,menuinput,complexmenu)
{var html="\n<div class='"+css_mainwrap+"' id='"+cid+"_menu' style='display:none;z-index:100'>\n";if(!complexmenu)
{len=parseInt(menuinput.length);if(len>0)
{for(var i in menuinput)
{t=parseInt(i)+1;thisclass=(t==len)?css_menusep_last:css_menusep;if(menuinput[i].match(/^--NODIV--/))
{html+=menuinput[i].replace(/^--NODIV--/,'');}
else
{html+="<div class='"+thisclass+"'>\n"+menuinput[i]+"\n</div>\n";}}}}
else
{html+=menuinput;}
html+="\n</div>\n";if(is_ie)
{html+="\n"+'<iframe id="if_'+cid+'" src="javascript:;" scrolling="no" frameborder="0" style="position:absolute;top:0px;left:0px;display:none;"></iframe>'+"\n";}
if(html!='')
{document.open();document.writeln(html);document.close();}
menu_register(cid);}