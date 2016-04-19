class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery with: :exception




	def goodbye
		render text: "Goodbye world&gt;"
	end

	def hello # I only changed the text because the assigmnet did not say to creat a new function or else I would renamed the function as hola
		render text: "Using UTF8 Encoding:<br>\u00A1Hola, mundo\u0021 <br><br>Using HTML Entities:<br>&iexcl;Hola, mundo&excl;"
	end

end
