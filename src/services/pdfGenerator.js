import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * NammaTrip AI - Client-side PDF Generator
 * Generates an A4 printable itinerary PDF with high-DPI rendering,
 * full Kannada script support, day-wise schedule, budget economics,
 * and clean page breaks between days.
 */

// Helper to format currency in Indian numbering (e.g. ₹12,000)
function formatINR(val) {
  const num = Number(val) || 0;
  return '₹' + num.toLocaleString('en-IN');
}

// Helper to escape HTML characters safely
function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Creates printable HTML blocks for the itinerary.
 * Returns an array of DOM elements ready to be rendered to canvas and added to PDF.
 */
function createPrintableDOM(itinerary) {
  const container = document.createElement('div');
  container.id = 'nammatrip-pdf-staging';
  container.style.cssText = `
    position: absolute;
    left: -9999px;
    top: 0;
    width: 760px;
    background: #ffffff;
    color: #1a202c;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Nirmala UI", Tunga, Roboto, "Helvetica Neue", Arial, sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  `;

  // --- BLOCK 1: Document Header + Overview Summary Card ---
  const headerBlock = document.createElement('div');
  headerBlock.className = 'pdf-section-block';
  headerBlock.style.cssText = `
    background: #ffffff;
    padding: 24px 28px 20px;
    border-bottom: 2px solid #e2e8f0;
    margin-bottom: 16px;
    box-sizing: border-box;
  `;

  const interestsList = (itinerary.interests || []).join(', ') || 'Culture, Heritage, Nature';
  const genDate = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  headerBlock.innerHTML = `
    <!-- Top Branding Bar -->
    <div style="display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #143d2b; padding-bottom: 14px; margin-bottom: 18px;">
      <div>
        <div style="font-size: 11px; font-weight: 800; color: #d97706; letter-spacing: 0.08em; text-transform: uppercase;">
          ಕರ್ನಾಟಕ ಪ್ರವಾಸ ದರ್ಶನ • KARNATAKA TRAVEL PLANNER
        </div>
        <h1 style="margin: 4px 0 2px 0; font-size: 24px; font-weight: 900; color: #143d2b;">
          NammaTrip AI
        </h1>
        <div style="font-size: 13px; color: #4a5568; font-weight: 600;">
          Your Karnataka Journey, Your Way
        </div>
      </div>
      <div style="text-align: right;">
        <span style="display: inline-block; background: ${itinerary.isAiGenerated ? '#143d2b' : '#d97706'}; color: #ffffff; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 999px; letter-spacing: 0.04em; text-transform: uppercase;">
          ${itinerary.isAiGenerated ? '✨ Gemini AI Generated' : '📋 Curated Karnataka Blueprint'}
        </span>
        <div style="font-size: 11px; color: #718096; margin-top: 6px;">
          Generated on: <strong>${genDate}</strong>
        </div>
      </div>
    </div>

    <!-- Trip Title & Route -->
    <div style="background: #fcfbf7; border: 1.5px solid #e2d9cc; border-radius: 8px; padding: 16px 20px; margin-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="font-size: 11px; font-weight: 700; color: #c65328; text-transform: uppercase;">Destination Itinerary</span>
          <h2 style="margin: 2px 0 0 0; font-size: 20px; font-weight: 800; color: #143d2b;">
            ${escapeHTML(itinerary.destinationName)} (${escapeHTML(itinerary.duration)} Days)
          </h2>
        </div>
        <div style="font-size: 12px; color: #4a5568; font-weight: 700;">
          Route: <span style="color: #143d2b;">${escapeHTML(itinerary.startingCity)} ➔ ${escapeHTML(itinerary.destinationName)}</span>
        </div>
      </div>

      <!-- Quick Specs Row -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 14px; padding-top: 12px; border-top: 1px dashed #cbd5e0;">
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase; display: block;">Travellers</span>
          <strong style="font-size: 14px; color: #143d2b;">👥 ${escapeHTML(itinerary.travellers)} Person(s)</strong>
        </div>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase; display: block;">Pace</span>
          <strong style="font-size: 14px; color: #143d2b;">🏃 ${escapeHTML(itinerary.pace || 'Balanced')}</strong>
        </div>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase; display: block;">Language</span>
          <strong style="font-size: 14px; color: #143d2b;">🗣️ ${escapeHTML(itinerary.language || 'English')}</strong>
        </div>
        <div>
          <span style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase; display: block;">Budget Tier</span>
          <strong style="font-size: 14px; color: #c65328;">🏷️ ${escapeHTML(itinerary.budgetStatus || 'Standard')}</strong>
        </div>
      </div>
    </div>

    <!-- Budget Economics Box -->
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: #ffffff; border: 1.5px solid #cbd5e0; border-radius: 8px; padding: 12px 16px;">
      <div>
        <div style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase;">Total Estimated Budget</div>
        <div style="font-size: 18px; font-weight: 900; color: #c65328; margin-top: 2px;">
          ${formatINR(itinerary.totalBudget)}
        </div>
        <div style="font-size: 10px; color: #a0aec0;">For group of ${escapeHTML(itinerary.travellers)}</div>
      </div>
      <div>
        <div style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase;">Budget Per Person</div>
        <div style="font-size: 18px; font-weight: 800; color: #143d2b; margin-top: 2px;">
          ${formatINR(itinerary.perPersonBudget)}
        </div>
        <div style="font-size: 10px; color: #a0aec0;">${formatINR(itinerary.dailyPerPerson)} / day</div>
      </div>
      <div>
        <div style="font-size: 10px; font-weight: 700; color: #718096; text-transform: uppercase;">Included Interests</div>
        <div style="font-size: 12px; font-weight: 700; color: #2d3748; margin-top: 4px; line-height: 1.3;">
          ${escapeHTML(interestsList)}
        </div>
      </div>
    </div>
  `;
  container.appendChild(headerBlock);

  // --- DAY BLOCKS: One block per day ---
  const dayBlocks = [];
  (itinerary.days || []).forEach((day) => {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'pdf-day-block';
    dayDiv.style.cssText = `
      background: #ffffff;
      padding: 16px 28px 18px;
      margin-bottom: 14px;
      border: 1.5px solid #e2e8f0;
      border-radius: 8px;
      box-sizing: border-box;
    `;

    // Render slots (Morning, Afternoon, Evening)
    const renderSlotHTML = (slot, slotType, slotLabel, timeBadgeColor) => {
      if (!slot) return '';
      return `
        <div style="background: #fdfdfd; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px 14px; margin-bottom: 10px; border-left: 4px solid ${timeBadgeColor};">
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; flex-wrap: wrap; gap: 4px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 11px; font-weight: 800; color: ${timeBadgeColor}; text-transform: uppercase; background: #f7fafc; padding: 2px 6px; border-radius: 4px;">
                ${slotLabel}
              </span>
              <span style="font-size: 11px; color: #718096; font-weight: 600;">
                ${escapeHTML(slot.time || '')}
              </span>
            </div>
            ${slot.estimatedCost ? `
              <span style="font-size: 11px; font-weight: 700; color: #c65328; background: #fff5f2; padding: 2px 8px; border-radius: 4px;">
                💰 ${escapeHTML(slot.estimatedCost)}
              </span>
            ` : ''}
          </div>

          <div style="font-size: 14px; font-weight: 800; color: #143d2b; margin: 4px 0;">
            ${escapeHTML(slot.title)}
          </div>
          <div style="font-size: 12px; color: #4a5568; line-height: 1.45; margin-bottom: 8px;">
            ${escapeHTML(slot.description)}
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px; background: #f7fafc; padding: 6px 10px; border-radius: 4px;">
            ${slot.highlight ? `
              <div>
                <strong style="color: #143d2b;">⭐ Highlight:</strong>
                <span style="color: #2d3748;"> ${escapeHTML(slot.highlight)}</span>
              </div>
            ` : '<div></div>'}
            ${slot.food ? `
              <div>
                <strong style="color: #d97706;">☕ Local Bite:</strong>
                <span style="color: #2d3748;"> ${escapeHTML(slot.food)}</span>
              </div>
            ` : '<div></div>'}
          </div>

          ${(slot.mapsQuery || slot.mapsUrl) ? `
            <div style="font-size: 10px; color: #4a5568; margin-top: 6px;">
              📍 <strong>Location Search:</strong> ${escapeHTML(slot.mapsQuery || slot.title)}
            </div>
          ` : ''}
        </div>
      `;
    };

    dayDiv.innerHTML = `
      <!-- Day Banner -->
      <div style="background: #143d2b; color: #ffffff; padding: 8px 14px; border-radius: 6px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <span style="background: #d97706; color: #143d2b; font-size: 11px; font-weight: 900; padding: 2px 8px; border-radius: 4px; text-transform: uppercase;">
            Day 0${escapeHTML(day.dayNumber)}
          </span>
          <span style="font-size: 14px; font-weight: 800; letter-spacing: 0.02em;">
            ${escapeHTML(day.dayTitle)}
          </span>
        </div>
      </div>

      <!-- 3 Slots: Morning, Afternoon, Evening -->
      ${renderSlotHTML(day.morning, 'morning', '🌅 Morning', '#d97706')}
      ${renderSlotHTML(day.afternoon, 'afternoon', '☀️ Afternoon', '#143d2b')}
      ${renderSlotHTML(day.evening, 'evening', '🌇 Evening', '#c65328')}
    `;

    container.appendChild(dayDiv);
    dayBlocks.push(dayDiv);
  });

  // --- FINAL BLOCK: Disclaimer & Credits Footer ---
  const footerBlock = document.createElement('div');
  footerBlock.className = 'pdf-section-block';
  footerBlock.style.cssText = `
    background: #f7fafc;
    border: 1px dashed #cbd5e0;
    border-radius: 6px;
    padding: 12px 18px;
    margin-top: 8px;
    box-sizing: border-box;
  `;
  footerBlock.innerHTML = `
    <div style="font-size: 10px; font-weight: 800; color: #4a5568; text-transform: uppercase; margin-bottom: 2px;">
      ⚠️ Cost & Transit Notice:
    </div>
    <div style="font-size: 10px; color: #718096; line-height: 1.45;">
      ${escapeHTML(itinerary.budgetDisclaimer || 'All budget figures, food prices, and transit fees are estimated approximations in INR for general planning. Live rates, temple opening hours, and transport schedules should be confirmed locally.')}
    </div>
    <div style="margin-top: 8px; padding-top: 6px; border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; font-size: 10px; color: #a0aec0;">
      <span>NammaTrip AI • Designed for Karnataka Travel</span>
      <span>ಕರ್ನಾಟಕ ಪ್ರವಾಸ ದರ್ಶನ • All Rights Reserved</span>
    </div>
  `;
  container.appendChild(footerBlock);

  document.body.appendChild(container);
  return { container, headerBlock, dayBlocks, footerBlock };
}

/**
 * Main export: generate and download the PDF.
 */
export async function generateItineraryPDF(itinerary) {
  if (!itinerary) {
    throw new Error('No itinerary data available to generate PDF.');
  }

  // Setup DOM elements in off-screen container
  const { container, headerBlock, dayBlocks, footerBlock } = createPrintableDOM(itinerary);

  try {
    // Initialize jsPDF A4 portrait in mm
    // A4: 210mm x 297mm
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pageWidth = 210;
    const pageHeight = 297;
    const marginX = 10;
    const marginYTop = 10;
    const marginYBottom = 14;
    const usableWidth = pageWidth - (marginX * 2); // 190mm
    const maxY = pageHeight - marginYBottom; // 283mm threshold for page breaks

    let currentY = marginYTop;
    let pageNumber = 1;

    // Helper to capture a DOM node to canvas and calculate height in mm
    const renderNodeToCanvas = async (domNode) => {
      const canvas = await html2canvas(domNode, {
        scale: 2, // 2x retina scale for crisp text and Kannnada fonts
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      const heightMm = (canvas.height / canvas.width) * usableWidth;
      return { canvas, heightMm };
    };

    // Stamping running header on subsequent pages
    const stampPageHeader = (pNum) => {
      if (pNum <= 1) return;
      pdf.setFontSize(8);
      pdf.setTextColor(113, 128, 150);
      pdf.text(
        `NammaTrip AI • ${itinerary.destinationName} (${itinerary.duration} Days) • ಕರ್ನಾಟಕ ಪ್ರವಾಸ ದರ್ಶನ`,
        marginX,
        marginYTop - 3
      );
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.3);
      pdf.line(marginX, marginYTop - 1, pageWidth - marginX, marginYTop - 1);
    };

    // Helper to add canvas image to current page
    const addCanvasToPdf = (canvas, heightMm) => {
      const imgData = canvas.toDataURL('image/jpeg', 0.95);
      pdf.addImage(imgData, 'JPEG', marginX, currentY, usableWidth, heightMm);
      currentY += heightMm + 4; // 4mm spacing
    };

    // 1. Render Header / Overview block
    const headerRender = await renderNodeToCanvas(headerBlock);
    addCanvasToPdf(headerRender.canvas, headerRender.heightMm);

    // 2. Render each Day block with intelligent page break detection
    for (let i = 0; i < dayBlocks.length; i++) {
      const dayNode = dayBlocks[i];
      const dayRender = await renderNodeToCanvas(dayNode);

      // Check if this day block fits on the current page
      if (currentY + dayRender.heightMm > maxY) {
        // Does not fit: advance to new page
        pdf.addPage();
        pageNumber++;
        currentY = marginYTop + 4;
        stampPageHeader(pageNumber);
      }

      addCanvasToPdf(dayRender.canvas, dayRender.heightMm);
    }

    // 3. Render Footer block
    const footerRender = await renderNodeToCanvas(footerBlock);
    if (currentY + footerRender.heightMm > maxY) {
      pdf.addPage();
      pageNumber++;
      currentY = marginYTop + 4;
      stampPageHeader(pageNumber);
    }
    addCanvasToPdf(footerRender.canvas, footerRender.heightMm);

    // 4. Stamp running footer with total page count on all pages
    const totalPages = pdf.getNumberOfPages();
    for (let p = 1; p <= totalPages; p++) {
      pdf.setPage(p);
      pdf.setFontSize(8);
      pdf.setTextColor(160, 174, 192);

      // Left branding
      pdf.text('NammaTrip AI • Karnataka Travel Itinerary', marginX, pageHeight - 6);

      // Right pagination
      const pageStr = `Page ${p} of ${totalPages}`;
      const pageStrWidth = pdf.getTextWidth(pageStr);
      pdf.text(pageStr, pageWidth - marginX - pageStrWidth, pageHeight - 6);

      // Subtle footer divider line
      pdf.setDrawColor(226, 232, 240);
      pdf.setLineWidth(0.2);
      pdf.line(marginX, pageHeight - 9, pageWidth - marginX, pageHeight - 9);
    }

    // Generate safe download filename
    const destName = (itinerary.destinationName || 'Karnataka')
      .replace(/[^a-zA-Z0-9]/g, '-')
      .replace(/-+/g, '-');
    const filename = `NammaTrip-${destName}-${itinerary.duration || 3}Days.pdf`;

    // Trigger direct browser download
    pdf.save(filename);
    return true;
  } finally {
    // Always clean up off-screen staging DOM element
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  }
}
