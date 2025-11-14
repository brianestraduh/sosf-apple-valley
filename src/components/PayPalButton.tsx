export function PayPalButton() {
  return (
    <div className="flex justify-center my-8">
      <form 
        action="https://www.paypal.com/donate" 
        method="post" 
        target="_top"
        className="inline-block"
      >
        <input type="hidden" name="hosted_button_id" value="X9H7RBVJ2ECYJ" />
        <input 
          type="image" 
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" 
          name="submit" 
          title="PayPal - The safer, easier way to pay online!" 
          alt="Donate with PayPal button"
          className="border-0"
        />
        <img 
          alt="" 
          src="https://www.paypal.com/en_US/i/scr/pixel.gif" 
          width="1" 
          height="1"
          className="border-0"
        />
      </form>
    </div>
  )
}

