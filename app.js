// Main Application
class CSVVisualizer {
    constructor() {
        // Initialize DOM elements
        this.initializeElements();
        // Set up event listeners
        this.initializeEventListeners();
        // Check for saved preferences
        this.initializeApp();
    }

    initializeElements() {
        // Input elements
        this.csvInput = document.getElementById('csvInput');
        this.fileInput = document.getElementById('fileInput');
        this.processBtn = document.getElementById('processBtn');
        this.csvError = document.getElementById('csvError');
        
        // Table and chart containers
        this.tableContainer = document.getElementById('tableContainer');
        this.chartConfig = document.getElementById('chartConfig');
        this.chartContainer = document.getElementById('chartContainer');
        
        // Chart configuration
        this.xAxisSelect = document.getElementById('xAxis');
        this.yAxisSelect = document.getElementById('yAxis');
        this.chartTypeSelect = document.getElementById('chartType');
        this.updateChartBtn = document.getElementById('updateChartBtn');
        this.exportChartBtn = document.getElementById('exportChartBtn');
        
        // Theme toggle
        this.darkModeToggle = document.getElementById('darkModeToggle');
        
        // Data storage
        this.csvData = [];
        this.headers = [];
        this.chart = null;
    }

    initializeEventListeners() {
        // CSV processing
        this.processBtn.addEventListener('click', () => this.processCSV(this.csvInput.value));
        this.fileInput.addEventListener('change', (e) => this.handleFileUpload(e));
        
        // Chart controls
        this.updateChartBtn.addEventListener('click', () => this.updateChart());
        this.exportChartBtn.addEventListener('click', () => this.exportChart());
        
        // Theme toggle
        this.darkModeToggle.addEventListener('click', () => this.toggleDarkMode());
    }

    initializeApp() {
        // Check for saved theme preference
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.documentElement.setAttribute('data-theme', 'dark');
            this.darkModeToggle.checked = true;
        }
    }

    // Process CSV data
    processCSV(csvText) {
        try {
            // Reset previous state
            this.csvError.classList.add('d-none');
            this.csvData = [];
            
            if (!csvText || !csvText.trim()) {
                throw new Error('Por favor ingrese datos CSV');
            }
            
            // Normalize line endings and split into lines
            const lines = csvText.replace(/\r\n?/g, '\n').split('\n').filter(line => line.trim() !== '');
            
            if (lines.length < 2) {
                throw new Error('El archivo CSV debe tener al menos una fila de encabezado y una fila de datos');
            }
            
            // Get headers
            this.headers = this.parseCSVLine(lines[0]);
            
            // Process data rows
            for (let i = 1; i < lines.length; i++) {
                const values = this.parseCSVLine(lines[i]);
                if (values.length === 0) continue;
                
                const row = {};
                this.headers.forEach((header, index) => {
                    row[header] = values[index] || '';
                });
                this.csvData.push(row);
            }
            
            // Update UI
            this.renderTable();
            this.setupChartConfiguration();
            this.chartConfig.style.display = 'block';
            
        } catch (error) {
            this.showError(error.message);
        }
    }

    // Parse a single CSV line, handling quoted values
    parseCSVLine(line) {
        const result = [];
        let inQuotes = false;
        let currentValue = '';
        
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            
            if (char === '"') {
                inQuotes = !inQuotes;
            } else if (char === ',' && !inQuotes) {
                result.push(currentValue.trim());
                currentValue = '';
            } else {
                currentValue += char;
            }
        }
        
        // Add the last value
        result.push(currentValue.trim());
        return result;
    }

    // Render the data table
    renderTable() {
        if (this.csvData.length === 0) return;
        
        let html = '<div class="table-responsive"><table class="table table-striped table-hover"><thead><tr>';
        
        // Add headers
        this.headers.forEach(header => {
            html += `<th>${header}</th>`;
        });
        
        html += '</tr></thead><tbody>';
        
        // Add data rows
        this.csvData.forEach(row => {
            html += '<tr>';
            this.headers.forEach(header => {
                html += `<td>${row[header] || ''}</td>`;
            });
            html += '</tr>';
        });
        
        html += '</tbody></table></div>';
        this.tableContainer.innerHTML = html;
    }

    // Set up chart configuration dropdowns
    setupChartConfiguration() {
        // Clear previous options
        this.xAxisSelect.innerHTML = '<option value="">Seleccione columna</option>';
        this.yAxisSelect.innerHTML = '<option value="">Seleccione columna</option>';
        
        // Add options for each header
        this.headers.forEach(header => {
            const option = document.createElement('option');
            option.value = header;
            option.textContent = header;
            this.xAxisSelect.appendChild(option.cloneNode(true));
            this.yAxisSelect.appendChild(option);
        });
    }

    // Update the chart based on current configuration
    updateChart() {
        const xAxis = this.xAxisSelect.value;
        const yAxis = this.yAxisSelect.value;
        const chartType = this.chartTypeSelect.value;
        
        if (!xAxis || !yAxis) {
            this.showError('Por favor seleccione los ejes X e Y');
            return;
        }
        
        // Prepare data for chart
        const labels = this.csvData.map(row => row[xAxis]);
        const data = this.csvData.map(row => parseFloat(row[yAxis]) || 0);
        
        // Get chart colors based on theme
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#ffffff' : '#666666';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        
        // Chart configuration
        const config = {
            type: chartType,
            data: {
                labels: labels,
                datasets: [{
                    label: yAxis,
                    data: data,
                    backgroundColor: 'rgba(74, 111, 165, 0.5)',
                    borderColor: 'rgba(74, 111, 165, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: `${yAxis} por ${xAxis}`,
                        color: textColor,
                        font: {
                            size: 16
                        }
                    },
                    legend: {
                        labels: {
                            color: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: xAxis,
                            color: textColor
                        },
                        grid: {
                            color: gridColor
                        },
                        ticks: {
                            color: textColor
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: yAxis,
                            color: textColor
                        },
                        grid: {
                            color: gridColor
                        },
                        ticks: {
                            color: textColor
                        }
                    }
                }
            }
        };
        
        // Create or update chart
        const ctx = document.getElementById('chartCanvas').getContext('2d');
        if (this.chart) {
            this.chart.destroy();
        }
        this.chart = new Chart(ctx, config);
    }

    // Export chart as image
    exportChart() {
        if (!this.chart) {
            this.showError('No hay gráfico para exportar');
            return;
        }
        
        const link = document.createElement('a');
        link.download = 'grafico.png';
        link.href = this.chart.toBase64Image();
        link.click();
    }

    // Toggle dark mode
    toggleDarkMode() {
        if (this.darkModeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('darkMode', 'disabled');
        }
        
        // Update chart colors if it exists
        if (this.chart) {
            this.updateChartTheme();
        }
    }

    // Update chart theme colors
    updateChartTheme() {
        if (!this.chart) return;
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        const textColor = isDark ? '#ffffff' : '#666666';
        const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
        
        // Update chart options
        this.chart.options.scales.x.ticks.color = textColor;
        this.chart.options.scales.y.ticks.color = textColor;
        this.chart.options.scales.x.grid.color = gridColor;
        this.chart.options.scales.y.grid.color = gridColor;
        
        if (this.chart.options.plugins.title) {
            this.chart.options.plugins.title.color = textColor;
        }
        
        this.chart.update();
    }

    // Handle file upload
    handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = (e) => {
            this.csvInput.value = e.target.result;
            this.processCSV(e.target.result);
        };
        reader.readAsText(file);
    }

    // Show error message
    showError(message) {
        this.csvError.textContent = message;
        this.csvError.classList.remove('d-none');
        
        // Scroll to error
        this.csvError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    window.csvVisualizer = new CSVVisualizer();
});
