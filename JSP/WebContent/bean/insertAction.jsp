<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	request.setCharacterEncoding("utf-8"); // jsp 안이기 때문에 request 쓸 수 있는 것이다.
	//jsp 내장객체 - request , response, out, session, application, exception
%>
<jsp:useBean id="board" class="kosa.model.Board"/> <!-- useBean 은 board 객체 만들겠다는 것 -->
<jsp:setProperty property="*" name="board"/>

<%
	request.setAttribute("name", board.getWriter());
%>
<jsp:forward page="result2.jsp"/>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
	out.println(board.toString());	
%>
</body>
</html>