class PagesController < ApplicationController
  def hello        
		respond_to do |format|
			format.html 
			format.js 
		end  	
  end
end
