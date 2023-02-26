

<%
	request.setCharacterEncoding("UTF-8");
	String cp = request.getContextPath();
	
	// JsonTest02_ok.jsp
				
	String name = request.getParameter("name");
	String title = request.getParameter("title");
	String content = request.getParameter("content");
	
	// 반환해 줄 쿼리 스트링
	String result = "";
	
	//for(int n=1; n<=5; n++)
	//{
		StringBuffer sb = new StringBuffer();
		
		// JsonTest01_ok.jsp 내용 복붙
		sb.append("{\"num\":\"" + n + "\"");
		sb.append(",\"title\":\"" + title+ "\"");
		sb.append(",\"name\":\"" + name + "\"");
		/* sb.append(",\"content\":\"" + content + "\"}"); */
		sb.append(",\"content\":\"" + content + "\"},"); // check~!!! *** 컴마 『,』 추가함!
		
		result += sb.toString();
	//}
	
	// 마지막 『,』 제거 (탈락)
	result = result.substring(0, result.length()-1);
	
	// json 배열 객체 구성 [{}]
	//result = "[" + result + "]";
		
	out.println(result);
	
%>