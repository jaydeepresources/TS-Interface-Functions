interface Printable {
    print()
}

function testPrinter(printer: Printable) {
    printer.print()
}

class SomePrinter implements Printable {
    print() {
        console.log('Printing a page...')
    }
}

testPrinter(new SomePrinter())