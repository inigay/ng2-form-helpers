import {Directive, HostListener, ElementRef, OnInit, Input, Output, EventEmitter, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/forms';
import PhonePipe from './../pipes/phone.pipe';

export const CUSTOM_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PhoneFormatterDirective),
    multi: true
};

@Directive({selector: "[phoneFormatter]", providers: [CUSTOM_VALUE_ACCESSOR]})
class PhoneFormatterDirective implements OnInit, ControlValueAccessor
{
    private element: HTMLInputElement;
    private onChangeCallback: (_:any) => void;
    private onTouchedCallback: () => void;

    @Input() ngModel;
    @Output() ngModelChange = new EventEmitter();

    constructor(
        private elementRef: ElementRef,
        private phonePipe: PhonePipe
    )
    {
        this.element = this.elementRef.nativeElement;
    }


    ngOnInit()
    {
        this.element.value = this.phonePipe.transform(this.ngModel);
    }


    @HostListener("input", ["$event.target.value"])
    onInput(value:string)
    {
        this.element.value = this.phonePipe.transform(value);
        this.onChangeCallback(this.element.value.replace(/\(|\)| |-/g, (v) => {return ""}));
    }
    

    @HostListener('blur')
    onBlur()
    {
        this.onTouchedCallback();
    }
    

    writeValue(value)
    {
        if(value !== null)
        {
            this.element.value = this.phonePipe.transform(value);
            this.onChangeCallback(this.element.value.replace(/\(|\)| |-/g, (v) => {return ""}));
        }
    }


    registerOnChange(fn:any)
    {
        this.onChangeCallback = fn;
    }

    registerOnTouched(fn:any)
    {
        this.onTouchedCallback = fn;
    }
    

}

export default PhoneFormatterDirective;