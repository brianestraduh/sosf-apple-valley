import { useState } from 'react'
import { jsPDF } from 'jspdf'

export function ReceiptGenerator() {
  const [donorName, setDonorName] = useState('')
  const [amount, setAmount] = useState('')
  const [donationDate, setDonationDate] = useState('')
  const [email, setEmail] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const generateReceipt = () => {
    if (!donorName || !amount || !donationDate) {
      alert('Please fill in all required fields')
      return
    }

    setIsGenerating(true)

    try {
      const doc = new jsPDF()
      
      // Set font
      doc.setFont('helvetica')
      
      // Header - Organization name
      doc.setFontSize(20)
      doc.setFont('helvetica', 'bold')
      doc.text('OFFICIAL DONATION RECEIPT', 105, 30, { align: 'center' })
      
      // Organization info
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      doc.text('Submissions of Success Foundation Inc | EIN: 33-4019131', 105, 40, { align: 'center' })
      doc.text('18156 Cold Creek Ln. Victorville, CA 92395', 105, 46, { align: 'center' })
      doc.text('Phone: 909-413-2993 | Email: HLEdney@icloud.com', 105, 52, { align: 'center' })
      
      // Generate receipt number
      const receiptNumber = `SOSF-${Date.now()}`
      const today = new Date().toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
      
      // Receipt details (left side)
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text('Receipt Number:', 20, 70)
      doc.text('Donation Date:', 20, 78)
      doc.text('Receipt Issue Date:', 20, 86)
      
      doc.setFont('helvetica', 'normal')
      doc.text(receiptNumber, 70, 70)
      doc.text(donationDate, 70, 78)
      doc.text(today, 70, 86)
      
      // Organization contact (right side)
      doc.setFont('helvetica', 'bold')
      doc.text('Organization Contact:', 120, 70)
      doc.setFont('helvetica', 'normal')
      doc.text('Hans Edney', 120, 78)
      doc.text('Phone: 909-413-2993', 120, 86)
      doc.text('Email: HLEdney@icloud.com', 120, 94)
      
      // Donor information
      doc.setFont('helvetica', 'bold')
      doc.text('Billing / Donor Name:', 20, 110)
      doc.text('Donation Amount:', 20, 118)
      doc.text('Designation:', 20, 126)
      doc.text('Donation Type:', 20, 134)
      
      doc.setFont('helvetica', 'normal')
      doc.text(donorName, 70, 110)
      doc.text(`$${parseFloat(amount).toFixed(2)} General Fund One-Time`, 70, 118)
      doc.text('General Fund', 70, 126)
      doc.text('Personal', 70, 134)
      
      if (email) {
        doc.setFont('helvetica', 'bold')
        doc.text('Email:', 20, 142)
        doc.setFont('helvetica', 'normal')
        doc.text(email, 70, 142)
      }
      
      // Thank you section
      doc.setFontSize(14)
      doc.setFont('helvetica', 'bold')
      doc.text('THANK YOU FOR YOUR SUPPORT', 105, 165, { align: 'center' })
      
      doc.setFontSize(10)
      doc.setFont('helvetica', 'normal')
      const thankYouText = 'This letter acknowledges receipt of a charitable contribution to Submissions of Success Foundation Inc.'
      doc.text(thankYouText, 105, 175, { align: 'center', maxWidth: 170 })
      
      // Tax deductibility statement (bottom)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'italic')
      const taxText = 'Submissions of Success Foundation Inc is a 501(c)(3) organization. Contributions are tax-deductible within the limits allowed by law. Please keep this receipt as your official record for tax purposes.'
      doc.text(taxText, 20, 260, { maxWidth: 170 })
      
      doc.setFont('helvetica', 'bold')
      doc.text(`Receipt ID: ${receiptNumber}`, 105, 275, { align: 'center' })
      
      // Download the PDF
      doc.save(`SOSF-Receipt-${donorName.replace(/\s+/g, '-')}-${Date.now()}.pdf`)
      
      // Reset form
      setDonorName('')
      setAmount('')
      setDonationDate('')
      setEmail('')
      
      alert('Receipt downloaded successfully!')
    } catch (error) {
      console.error('Error generating receipt:', error)
      alert('Error generating receipt. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div className="bg-brand-sand/10 rounded-2xl p-8 my-8">
      <h2 className="h3 mb-4">Generate IRS-Compliant Receipt</h2>
      <p className="text-neutral-700 mb-6">
        Need an official receipt for tax purposes? Enter your donation details below to generate 
        an IRS-compliant donation acknowledgment letter.
      </p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="donorName">
            Donor Name <span className="text-brand-red">*</span>
          </label>
          <input
            id="donorName"
            type="text"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            placeholder="John Doe"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="amount">
            Donation Amount <span className="text-brand-red">*</span>
          </label>
          <input
            id="amount"
            type="number"
            step="0.01"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100.00"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="donationDate">
            Donation Date <span className="text-brand-red">*</span>
          </label>
          <input
            id="donationDate"
            type="date"
            value={donationDate}
            onChange={(e) => setDonationDate(e.target.value)}
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email (Optional)
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red"
          />
        </div>
        
        <button
          onClick={generateReceipt}
          disabled={isGenerating}
          className="w-full bg-brand-red text-white font-bold text-lg py-4 px-6 rounded-lg hover:bg-brand-red/90 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <>
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Generating...
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Official Receipt (PDF)
            </>
          )}
        </button>
        
        <p className="text-sm text-neutral-600 italic">
          * Required fields. Please ensure all information is accurate as it will appear on your official tax receipt.
        </p>
      </div>
    </div>
  )
}

