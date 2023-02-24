<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%
/*
	String name = (String)session.getAttribute("name");
    if(name == null){
        response.sendRedirect("loginForm.jsp");
    }
*/
    session.invalidate(); // 세션에 있는 데이터 값 다 비워짐
%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>
<body>

</body>
</html>