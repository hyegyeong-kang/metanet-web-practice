<%@page import="kosa.Member"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>

<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%-- 
<%
	Member m1 = new Member();	
	m1.setName("홍길동");
	m1.setAddress("서울");
	
	Member m2 = new Member();	
	m2.setName("김철수");
	m2.setAddress("부산");
	
	List<Member> list = new ArrayList<Member>();
	list.add(m1);
	list.add(m2);
	
	String str = JSONArray.fromObject(list).toString();
	out.print(str);

%>  
--%>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script src="jquery.js"></script>
<title>입력하세요.</title>
 
<script type="text/javascript">
	$(function() {
		$("#addBtn").click(function(){
			var obj={
					"name" : $('#name').val(),
					"title" : $('#title').val(),
					"content" : $('#content').val()
				};

				var params = "name=" + $("#name").val() +
				"&title=" + $("#title").val() +
				"&content=" + $("#content").val(); 
				
				var name = $('#name').val();
				var title = $('#title').val();
				var content = $('#content').val();
				
				$.ajax({
					url : "ajax01.jsp", 
					type : "post", 
					data : {
						"name": name,
						"title": title,
						"content": content
					},
					datatype : "json",
					success : function(data) { 

						let str = JSON.stringify(data, null, 2); 
						

						console.log(str);
						

						//$.each(data, function(index, item) { // 데이터 =item
							//$("#table_body").append(index + " "); // index가 끝날때까지 
							$("#table_body").append(data.name + " ");
							$("#table_body").append(data.title + " ");
							$("#table_body").append(data.content + " ");
						//});
					},
					error : function() {
						alert('error');			
					}
				});

		});
	});
 
</script>
 
</head>
<body>
	<div>
		<form id="insert_form">
		<fieldset>
			<legend>강혜경의 블로그</legend>
			<table>
				<tr>
				<td><label>이름</label></td>
				<td><input type="text" name="name" id="name" /></td>
				</tr>
				<tr>
				<td><label>제목</label></td>
				<td><input type="text" name="title" id="title"/></td>
				</tr>
				<tr>
				<td><label>내용</label></td>
				<td><input type="text" name="content" id="content" /></td>
				</tr>
			</table>
			<input type="button" value="추가하기" id="addBtn"/>	
			</fieldset>
		</form>
	</div>
	
	<p id="table_body"></p>
</body>
</html>













