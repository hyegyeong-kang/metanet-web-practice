package kosa.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CalsServlet
 */
@WebServlet("/CalsServlet")
public class CalsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CalsServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		int num1 = Integer.parseInt(request.getParameter("num1"));
		int num2 = Integer.parseInt(request.getParameter("num2"));
		
		String name = "kang";
		int result = num1 + num2;
		
		request.setAttribute("result", result); // jsp 에게 값 전달하겠다.
		request.setAttribute("name", name);
		
		// 페이지 이동 방식
		// 1. redirect : 기존 요청과 다른 새로운 요청
		//response.sendRedirect("result.jsp"); // 이렇게 되면 데이터 값이 없음 (연결 끊겼으니)
		
		
		// 2. Dispatcher : 기존 요청의 연장선 (하나의 리퀘스트) 새로운 페이지에 가도 같은 범위여서 데이터 사라지지 않고 남아있음
		RequestDispatcher re = request.getRequestDispatcher("result.jsp");
		re.forward(request, response);
	}

}
